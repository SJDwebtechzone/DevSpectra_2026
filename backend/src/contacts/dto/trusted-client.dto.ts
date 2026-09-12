import { IsString, IsNotEmpty, IsOptional, IsBoolean, IsNumber } from 'class-validator';

export class CreateTrustedClientDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsNotEmpty() src: string;
  @IsBoolean() @IsOptional() isActive?: boolean;
  @IsNumber() @IsOptional() order?: number;
}

export class UpdateTrustedClientDto {
  @IsString() @IsOptional() name?: string;
  @IsString() @IsOptional() src?: string;
  @IsBoolean() @IsOptional() isActive?: boolean;
  @IsNumber() @IsOptional() order?: number;
}
