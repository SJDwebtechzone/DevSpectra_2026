import { IsString, IsNotEmpty, IsOptional, IsArray, IsBoolean, IsNumber } from 'class-validator';
export class CreateProjectDto {
  @IsString() @IsNotEmpty() title: string;
  @IsString() @IsNotEmpty() slug: string;
  @IsString() @IsNotEmpty() description: string;
  @IsString() @IsOptional() shortDescription?: string;
  @IsString() @IsNotEmpty() category: string;
  @IsArray() @IsString({ each: true }) technologies: string[];
  @IsString() @IsOptional() githubUrl?: string;
  @IsString() @IsOptional() liveUrl?: string;
  @IsString() @IsOptional() thumbnail?: string;
  @IsArray() @IsString({ each: true }) @IsOptional() images?: string[];
  @IsBoolean() @IsOptional() featured?: boolean;
  @IsNumber() @IsOptional() displayOrder?: number;
  @IsString() @IsOptional() status?: string;
}