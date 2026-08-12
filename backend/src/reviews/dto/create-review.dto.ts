import { IsString, IsInt, Min, Max, IsOptional, IsBoolean, IsDateString, IsUrl } from 'class-validator';

export class CreateReviewDto {
  @IsOptional()
  @IsString()
  googleReviewId?: string;

  @IsString()
  reviewerName: string;

  @IsOptional()
  @IsUrl()
  reviewerPhoto?: string;

  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsString()
  reviewText: string;

  @IsOptional()
  @IsDateString()
  reviewDate?: string;

  @IsOptional()
  @IsBoolean()
  isVerified?: boolean;

  @IsOptional()
  @IsString()
  source?: string;

  @IsOptional()
  @IsUrl()
  profileUrl?: string;

  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;

  @IsOptional()
  @IsBoolean()
  isPublished?: boolean;

  @IsOptional()
  @IsInt()
  displayOrder?: number;
}
