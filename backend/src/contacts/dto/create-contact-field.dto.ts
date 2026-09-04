import { IsNotEmpty, IsString, IsOptional, IsBoolean, IsNumber, IsArray } from 'class-validator';

export class CreateContactFieldDto {
  @IsString() @IsNotEmpty() label: string;
  @IsString() @IsOptional() name?: string;
  @IsString() @IsNotEmpty() type: string;
  @IsString() @IsOptional() placeholder?: string;
  @IsArray() @IsOptional() options?: string[];
  @IsBoolean() @IsOptional() isRequired?: boolean;
  @IsBoolean() @IsOptional() halfWidth?: boolean;
  @IsNumber() @IsOptional() order?: number;
  @IsBoolean() @IsOptional() isActive?: boolean;
}

export class UpdateContactFieldDto {
  @IsString() @IsOptional() label?: string;
  @IsString() @IsOptional() type?: string;
  @IsString() @IsOptional() placeholder?: string;
  @IsArray() @IsOptional() options?: string[];
  @IsBoolean() @IsOptional() isRequired?: boolean;
  @IsBoolean() @IsOptional() halfWidth?: boolean;
  @IsNumber() @IsOptional() order?: number;
  @IsBoolean() @IsOptional() isActive?: boolean;
}
