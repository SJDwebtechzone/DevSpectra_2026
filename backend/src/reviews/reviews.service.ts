import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  create(createReviewDto: CreateReviewDto): Promise<Review> {
    const review = this.reviewRepository.create(createReviewDto);
    return this.reviewRepository.save(review);
  }

  findAll(isPublic: boolean): Promise<Review[]> {
    const whereCondition = isPublic ? { isPublished: true } : {};
    return this.reviewRepository.find({
      where: whereCondition,
      order: {
        isFeatured: 'DESC',
        displayOrder: 'ASC',
        createdAt: 'DESC',
      },
    });
  }

  async findOne(id: string): Promise<Review> {
    const review = await this.reviewRepository.findOne({ where: { id } });
    if (!review) {
      throw new NotFoundException(`Review with ID "${id}" not found`);
    }
    return review;
  }

  async update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review> {
    const review = await this.findOne(id);
    const updatedReview = this.reviewRepository.merge(review, updateReviewDto);
    return this.reviewRepository.save(updatedReview);
  }

  async remove(id: string): Promise<void> {
    const review = await this.findOne(id);
    await this.reviewRepository.remove(review);
  }

  async getStats() {
    const stats = await this.reviewRepository
      .createQueryBuilder('review')
      .select('COUNT(review.id)', 'totalReviews')
      .addSelect('AVG(review.rating)', 'averageRating')
      .addSelect(
        'COUNT(CASE WHEN review.rating = 5 THEN 1 END)',
        'fiveStarCount',
      )
      .addSelect(
        'COUNT(CASE WHEN review.rating = 4 THEN 1 END)',
        'fourStarCount',
      )
      .addSelect(
        'COUNT(CASE WHEN review.rating = 3 THEN 1 END)',
        'threeStarCount',
      )
      .where('review.isPublished = :isPublished', { isPublished: true })
      .getRawOne();

    return {
      totalReviews: parseInt(stats.totalReviews || '0', 10),
      averageRating: parseFloat(stats.averageRating || '0'),
      fiveStarCount: parseInt(stats.fiveStarCount || '0', 10),
      fourStarCount: parseInt(stats.fourStarCount || '0', 10),
      threeStarCount: parseInt(stats.threeStarCount || '0', 10),
    };
  }
}
