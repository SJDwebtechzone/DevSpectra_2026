import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): Promise<import("./entities/review.entity").Review>;
    getStats(): Promise<{
        totalReviews: number;
        averageRating: number;
        fiveStarCount: number;
        fourStarCount: number;
        threeStarCount: number;
    }>;
    findAll(request: any): Promise<import("./entities/review.entity").Review[]>;
    findOne(id: string): Promise<import("./entities/review.entity").Review>;
    update(id: string, updateReviewDto: UpdateReviewDto): Promise<import("./entities/review.entity").Review>;
    remove(id: string): Promise<void>;
}
