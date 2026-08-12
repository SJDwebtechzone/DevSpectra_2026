import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { GoogleReview } from './entities/google-review.entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GoogleReviewsService {
  private readonly logger = new Logger(GoogleReviewsService.name);

  constructor(
    @InjectRepository(GoogleReview)
    private googleReviewsRepository: Repository<GoogleReview>,
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getCachedReviews() {
    try {
      const latestReviews = await this.googleReviewsRepository.find({
        order: { updatedAt: 'DESC' },
        take: 1,
      });
      const latestReview = latestReviews[0];

      const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);

      // If no reviews exist or they are older than 6 hours, sync them in the background
      if (!latestReview || latestReview.updatedAt < sixHoursAgo) {
        this.syncGoogleReviews().catch(err => {
          this.logger.error('Background sync failed', err.stack);
        });
      }

      const reviews = await this.googleReviewsRepository.find({
        order: { reviewTimestamp: 'DESC' },
      });

      if (reviews.length === 0) {
        return {
          businessName: "DevSpectra",
          averageRating: 0,
          totalReviews: 0,
          reviews: [],
          message: "Google Reviews unavailable.",
        };
      }

      // Calculate stats
      const totalReviews = reviews.length;
      const averageRating = reviews.reduce((acc, curr) => acc + Number(curr.rating), 0) / totalReviews;
      const fiveStarCount = reviews.filter(r => r.rating === 5).length;
      const fourStarCount = reviews.filter(r => r.rating === 4).length;

      return {
        businessName: "DevSpectra",
        averageRating: Number(averageRating.toFixed(1)),
        totalReviews,
        fiveStarCount,
        fourStarCount,
        lastSyncTime: latestReview?.updatedAt,
        reviews: reviews.map(r => ({
          id: r.id,
          authorName: r.authorName,
          authorPhoto: r.authorPhoto,
          rating: r.rating,
          text: r.reviewText,
          relativeTime: r.relativeTime,
          isPublished: r.isPublished
        })).filter(r => r.isPublished), // Public endpoint only returns published
      };
    } catch (error) {
      this.logger.error('Error getting cached reviews', error.stack);
      throw new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async syncGoogleReviews() {
    this.logger.log('Syncing Google Reviews from Places API...');
    const apiKey = this.configService.get<string>('GOOGLE_PLACES_API_KEY');
    const placeId = this.configService.get<string>('GOOGLE_PLACE_ID');

    if (!apiKey || !placeId) {
      this.logger.error('Google Places API Key or Place ID missing in environment variables.');
      throw new HttpException('Missing API configuration', HttpStatus.INTERNAL_SERVER_ERROR);
    }

    try {
      const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: {
            'X-Goog-Api-Key': apiKey,
            'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
          },
        })
      );
      const data = response.data;

      const reviews = Array.isArray(data.reviews) ? data.reviews : [];

      for (const review of reviews) {
        const googleReviewId = review.name;

        const existingReview = await this.googleReviewsRepository.findOne({
          where: { googleReviewId },
        });

        if (existingReview) {
          existingReview.authorName = review.authorAttribution?.displayName || 'Anonymous';
          existingReview.authorPhoto = review.authorAttribution?.photoUri || null;
          existingReview.profilePhotoUrl = review.authorAttribution?.photoUri || null;
          existingReview.rating = Number(review.rating || 0);
          existingReview.reviewText = review.originalText?.text || review.text?.text || '';
          existingReview.relativeTime = review.relativePublishTimeDescription || null;
          existingReview.reviewTimestamp = review.publishTime ? new Date(review.publishTime) : new Date();
          existingReview.language = review.originalText?.languageCode || review.text?.languageCode || null;
          existingReview.authorUrl = review.authorAttribution?.uri || null;
          await this.googleReviewsRepository.save(existingReview);
        } else {
          const newReview = this.googleReviewsRepository.create({
            googleReviewId,
            authorName: review.authorAttribution?.displayName || 'Anonymous',
            authorPhoto: review.authorAttribution?.photoUri || null,
            profilePhotoUrl: review.authorAttribution?.photoUri || null,
            rating: Number(review.rating || 0),
            reviewText: review.originalText?.text || review.text?.text || '',
            relativeTime: review.relativePublishTimeDescription || null,
            reviewTimestamp: review.publishTime ? new Date(review.publishTime) : new Date(),
            language: review.originalText?.languageCode || review.text?.languageCode || null,
            authorUrl: review.authorAttribution?.uri || null,
            isPublished: true,
          });
          await this.googleReviewsRepository.save(newReview);
        }
      }

      this.logger.log(`Successfully synced ${reviews.length} reviews.`);
      return {
        success: true,
        count: reviews.length,
        businessName: data.displayName?.text || 'DevSpectra',
        rating: data.rating || 0,
        totalGoogleReviews: data.userRatingCount || 0,
      };
    } catch (error: any) {
      this.logger.error('Failed to sync Google Reviews', error?.stack || error);
      throw new HttpException('Failed to sync Google Reviews', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async getAdminStats() {
    // Admin needs both published and unpublished
    const reviews = await this.googleReviewsRepository.find({
      order: { reviewTimestamp: 'DESC' },
    });
    
    const latestReviews = await this.googleReviewsRepository.find({
      order: { updatedAt: 'DESC' },
      take: 1,
    });
    const latestReview = latestReviews[0];

    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0 ? reviews.reduce((acc, curr) => acc + Number(curr.rating), 0) / totalReviews : 0;

    return {
      totalReviews,
      averageRating: Number(averageRating.toFixed(1)),
      fiveStarCount: reviews.filter(r => r.rating === 5).length,
      fourStarCount: reviews.filter(r => r.rating === 4).length,
      lastSyncTime: latestReview?.updatedAt || null,
      reviews,
    };
  }

  async togglePublish(id: string, isPublished: boolean) {
    const review = await this.googleReviewsRepository.findOne({ where: { id } });
    if (!review) throw new HttpException('Review not found', HttpStatus.NOT_FOUND);
    
    review.isPublished = isPublished;
    return this.googleReviewsRepository.save(review);
  }

  async deleteReview(id: string) {
    return this.googleReviewsRepository.delete(id);
  }
}
