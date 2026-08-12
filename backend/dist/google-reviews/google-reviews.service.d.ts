import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { GoogleReview } from './entities/google-review.entity';
export declare class GoogleReviewsService {
    private googleReviewsRepository;
    private readonly httpService;
    private readonly configService;
    private readonly logger;
    constructor(googleReviewsRepository: Repository<GoogleReview>, httpService: HttpService, configService: ConfigService);
    getCachedReviews(): Promise<{
        businessName: string;
        averageRating: number;
        totalReviews: number;
        reviews: never[];
        message: string;
        fiveStarCount?: undefined;
        fourStarCount?: undefined;
        lastSyncTime?: undefined;
    } | {
        businessName: string;
        averageRating: number;
        totalReviews: number;
        fiveStarCount: number;
        fourStarCount: number;
        lastSyncTime: Date;
        reviews: {
            id: string;
            authorName: string;
            authorPhoto: string;
            rating: number;
            text: string;
            relativeTime: string;
            isPublished: boolean;
        }[];
        message?: undefined;
    }>;
    syncGoogleReviews(): Promise<{
        success: boolean;
        count: any;
        businessName: any;
        rating: any;
        totalGoogleReviews: any;
    }>;
    getAdminStats(): Promise<{
        totalReviews: number;
        averageRating: number;
        fiveStarCount: number;
        fourStarCount: number;
        lastSyncTime: Date;
        reviews: GoogleReview[];
    }>;
    togglePublish(id: string, isPublished: boolean): Promise<GoogleReview>;
    deleteReview(id: string): Promise<import("typeorm").DeleteResult>;
}
