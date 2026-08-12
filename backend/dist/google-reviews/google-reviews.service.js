"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GoogleReviewsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const axios_1 = require("@nestjs/axios");
const config_1 = require("@nestjs/config");
const google_review_entity_1 = require("./entities/google-review.entity");
const rxjs_1 = require("rxjs");
let GoogleReviewsService = GoogleReviewsService_1 = class GoogleReviewsService {
    googleReviewsRepository;
    httpService;
    configService;
    logger = new common_1.Logger(GoogleReviewsService_1.name);
    constructor(googleReviewsRepository, httpService, configService) {
        this.googleReviewsRepository = googleReviewsRepository;
        this.httpService = httpService;
        this.configService = configService;
    }
    async getCachedReviews() {
        try {
            const latestReviews = await this.googleReviewsRepository.find({
                order: { updatedAt: 'DESC' },
                take: 1,
            });
            const latestReview = latestReviews[0];
            const sixHoursAgo = new Date(Date.now() - 6 * 60 * 60 * 1000);
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
                })).filter(r => r.isPublished),
            };
        }
        catch (error) {
            this.logger.error('Error getting cached reviews', error.stack);
            throw new common_1.HttpException('Internal server error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async syncGoogleReviews() {
        this.logger.log('Syncing Google Reviews from Places API...');
        const apiKey = this.configService.get('GOOGLE_PLACES_API_KEY');
        const placeId = this.configService.get('GOOGLE_PLACE_ID');
        if (!apiKey || !placeId) {
            this.logger.error('Google Places API Key or Place ID missing in environment variables.');
            throw new common_1.HttpException('Missing API configuration', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        try {
            const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, {
                headers: {
                    'X-Goog-Api-Key': apiKey,
                    'X-Goog-FieldMask': 'id,displayName,rating,userRatingCount,reviews',
                },
            }));
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
                }
                else {
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
        }
        catch (error) {
            this.logger.error('Failed to sync Google Reviews', error?.stack || error);
            throw new common_1.HttpException('Failed to sync Google Reviews', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAdminStats() {
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
    async togglePublish(id, isPublished) {
        const review = await this.googleReviewsRepository.findOne({ where: { id } });
        if (!review)
            throw new common_1.HttpException('Review not found', common_1.HttpStatus.NOT_FOUND);
        review.isPublished = isPublished;
        return this.googleReviewsRepository.save(review);
    }
    async deleteReview(id) {
        return this.googleReviewsRepository.delete(id);
    }
};
exports.GoogleReviewsService = GoogleReviewsService;
exports.GoogleReviewsService = GoogleReviewsService = GoogleReviewsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(google_review_entity_1.GoogleReview)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        axios_1.HttpService,
        config_1.ConfigService])
], GoogleReviewsService);
//# sourceMappingURL=google-reviews.service.js.map