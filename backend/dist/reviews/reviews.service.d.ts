import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';
export declare class ReviewsService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(createReviewDto: CreateReviewDto): Promise<Review>;
    findAll(isPublic: boolean): Promise<Review[]>;
    findOne(id: string): Promise<Review>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<Review>;
    remove(id: string): Promise<void>;
    getStats(): Promise<{
        totalReviews: number;
        averageRating: number;
        fiveStarCount: number;
        fourStarCount: number;
        threeStarCount: number;
    }>;
}
