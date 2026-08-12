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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entities/review.entity");
let ReviewsService = class ReviewsService {
    reviewRepository;
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    create(createReviewDto) {
        const review = this.reviewRepository.create(createReviewDto);
        return this.reviewRepository.save(review);
    }
    findAll(isPublic) {
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
    async findOne(id) {
        const review = await this.reviewRepository.findOne({ where: { id } });
        if (!review) {
            throw new common_1.NotFoundException(`Review with ID "${id}" not found`);
        }
        return review;
    }
    async update(id, updateReviewDto) {
        const review = await this.findOne(id);
        const updatedReview = this.reviewRepository.merge(review, updateReviewDto);
        return this.reviewRepository.save(updatedReview);
    }
    async remove(id) {
        const review = await this.findOne(id);
        await this.reviewRepository.remove(review);
    }
    async getStats() {
        const stats = await this.reviewRepository
            .createQueryBuilder('review')
            .select('COUNT(review.id)', 'totalReviews')
            .addSelect('AVG(review.rating)', 'averageRating')
            .addSelect('COUNT(CASE WHEN review.rating = 5 THEN 1 END)', 'fiveStarCount')
            .addSelect('COUNT(CASE WHEN review.rating = 4 THEN 1 END)', 'fourStarCount')
            .addSelect('COUNT(CASE WHEN review.rating = 3 THEN 1 END)', 'threeStarCount')
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
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map