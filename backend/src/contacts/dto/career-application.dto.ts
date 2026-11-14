import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateCareerApplicationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsOptional()
  message?: string;

  @IsString()
  @IsNotEmpty({ message: 'Resume or CV file is required' })
  fileName: string;

  @IsString()
  @IsNotEmpty({ message: 'Resume or CV file content is required' })
  fileBase64: string;
}
