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
exports.GoogleReviewsController = void 0;
const common_1 = require("@nestjs/common");
const google_reviews_service_1 = require("./google-reviews.service");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const user_entity_1 = require("../users/entities/user.entity");
let GoogleReviewsController = class GoogleReviewsController {
    googleReviewsService;
    constructor(googleReviewsService) {
        this.googleReviewsService = googleReviewsService;
    }
    getPublicReviews() {
        return this.googleReviewsService.getCachedReviews();
    }
    getAdminReviews() {
        return this.googleReviewsService.getAdminStats();
    }
    syncReviews() {
        return this.googleReviewsService.syncGoogleReviews();
    }
    togglePublish(id, isPublished) {
        return this.googleReviewsService.togglePublish(id, isPublished);
    }
    deleteReview(id) {
        return this.googleReviewsService.deleteReview(id);
    }
};
exports.GoogleReviewsController = GoogleReviewsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleReviewsController.prototype, "getPublicReviews", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.SUPER_ADMIN, user_entity_1.UserRole.ADMIN),
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleReviewsController.prototype, "getAdminReviews", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.SUPER_ADMIN),
    (0, common_1.Post)('sync'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleReviewsController.prototype, "syncReviews", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.SUPER_ADMIN, user_entity_1.UserRole.ADMIN),
    (0, common_1.Patch)(':id/publish'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('isPublished')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean]),
    __metadata("design:returntype", void 0)
], GoogleReviewsController.prototype, "togglePublish", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(user_entity_1.UserRole.SUPER_ADMIN, user_entity_1.UserRole.ADMIN),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GoogleReviewsController.prototype, "deleteReview", null);
exports.GoogleReviewsController = GoogleReviewsController = __decorate([
    (0, common_1.Controller)('reviews/google'),
    __metadata("design:paramtypes", [google_reviews_service_1.GoogleReviewsService])
], GoogleReviewsController);
//# sourceMappingURL=google-reviews.controller.js.map