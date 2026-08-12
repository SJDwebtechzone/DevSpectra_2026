import { GoogleReviewsService } from './google-reviews.service';
export declare class GoogleReviewsController {
    private readonly googleReviewsService;
    constructor(googleReviewsService: GoogleReviewsService);
    getPublicReviews(): Promise<{
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
    getAdminReviews(): Promise<{
        totalReviews: number;
        averageRating: number;
        fiveStarCount: number;
        fourStarCount: number;
        lastSyncTime: Date;
        reviews: import("./entities/google-review.entity").GoogleReview[];
    }>;
    syncReviews(): Promise<{
        success: boolean;
        count: any;
        businessName: any;
        rating: any;
        totalGoogleReviews: any;
    }>;
    togglePublish(id: string, isPublished: boolean): Promise<import("./entities/google-review.entity").GoogleReview>;
    deleteReview(id: string): Promise<import("typeorm").DeleteResult>;
}
