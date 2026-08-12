import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { GoogleReviewsService } from './google-reviews.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';
import { UserRole } from '../users/entities/user.entity';

@Controller('reviews/google')
export class GoogleReviewsController {
  constructor(private readonly googleReviewsService: GoogleReviewsService) {}

  @Get()
  getPublicReviews() {
    return this.googleReviewsService.getCachedReviews();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Get('admin')
  getAdminReviews() {
    return this.googleReviewsService.getAdminStats();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN)
  @Post('sync')
  syncReviews() {
    return this.googleReviewsService.syncGoogleReviews();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Patch(':id/publish')
  togglePublish(@Param('id') id: string, @Body('isPublished') isPublished: boolean) {
    return this.googleReviewsService.togglePublish(id, isPublished);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.SUPER_ADMIN, UserRole.ADMIN)
  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.googleReviewsService.deleteReview(id);
  }
}
