import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateOfficeLocationDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() city: string;
  @IsString() @IsNotEmpty() address: string;
  @IsString() @IsOptional() phone?: string;
  @IsString() @IsOptional() hours?: string;
  @IsString() @IsOptional() status?: string;
  @IsString() @IsNotEmpty() embedUrl: string;
  @IsString() @IsOptional() directUrl?: string;
  @IsBoolean() @IsOptional() isPrimary?: boolean;
  @IsNumber() @IsOptional() order?: number;
}

export class UpdateOfficeLocationDto {
  @IsString() @IsOptional() name?: string;
  @IsString() @IsOptional() city?: string;
  @IsString() @IsOptional() address?: string;
  @IsString() @IsOptional() phone?: string;
  @IsString() @IsOptional() hours?: string;
  @IsString() @IsOptional() status?: string;
  @IsString() @IsOptional() embedUrl?: string;
  @IsString() @IsOptional() directUrl?: string;
  @IsBoolean() @IsOptional() isPrimary?: boolean;
  @IsNumber() @IsOptional() order?: number;
}
