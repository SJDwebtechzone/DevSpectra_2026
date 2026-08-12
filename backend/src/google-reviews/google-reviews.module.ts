import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { GoogleReviewsService } from './google-reviews.service';
import { GoogleReviewsController } from './google-reviews.controller';
import { GoogleReview } from './entities/google-review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([GoogleReview]),
    HttpModule,
  ],
  controllers: [GoogleReviewsController],
  providers: [GoogleReviewsService],
  exports: [GoogleReviewsService],
})
export class GoogleReviewsModule {}
