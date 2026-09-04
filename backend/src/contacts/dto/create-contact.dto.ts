import { IsEmail, IsString, IsOptional, IsObject } from 'class-validator';

export class CreateContactDto {
  @IsString() @IsOptional() name?: string;
  @IsEmail() @IsOptional() email?: string;
  @IsString() @IsOptional() phone?: string;
  @IsString() @IsOptional() subject?: string;
  @IsString() @IsOptional() service?: string;
  @IsString() @IsOptional() message?: string;
  @IsObject() @IsOptional() customData?: Record<string, any>;
}