const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src');

const files = {
  'common/decorators/roles.decorator.ts': `import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../../users/entities/user.entity';
export const ROLES_KEY = 'roles';
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);`,

  'common/decorators/current-user.decorator.ts': `import { createParamDecorator, ExecutionContext } from '@nestjs/common';
export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);`,

  'common/guards/jwt-auth.guard.ts': `import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}`,

  'common/guards/roles.guard.ts': `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { UserRole } from '../../users/entities/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}`,

  'users/entities/user.entity.ts': `import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export enum UserRole { SUPER_ADMIN = 'SUPER_ADMIN', ADMIN = 'ADMIN' }
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column({ unique: true }) email: string;
  @Column({ select: false }) password: string;
  @Column({ type: 'enum', enum: UserRole, default: UserRole.SUPER_ADMIN }) role: UserRole;
  @Column({ default: true }) isActive: boolean;
  @Column({ nullable: true }) lastLogin: Date;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}`,

  'projects/entities/project.entity.ts': `import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() title: string;
  @Column({ unique: true }) slug: string;
  @Column('text') description: string;
  @Column('text', { nullable: true }) shortDescription: string;
  @Column() category: string;
  @Column('simple-array') technologies: string[];
  @Column({ nullable: true }) githubUrl: string;
  @Column({ nullable: true }) liveUrl: string;
  @Column({ nullable: true }) thumbnail: string;
  @Column('simple-array', { nullable: true }) images: string[];
  @Column({ default: false }) featured: boolean;
  @Column({ default: 0 }) displayOrder: number;
  @Column({ default: 'draft' }) status: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}`,

  'contacts/entities/contact.entity.ts': `import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column() email: string;
  @Column({ nullable: true }) phone: string;
  @Column() subject: string;
  @Column('text') message: string;
  @Column({ default: false }) isRead: boolean;
  @CreateDateColumn() createdAt: Date;
}`,

  'users/dto/create-user.dto.ts': `import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsString() @IsNotEmpty() name: string;
  @IsEmail() email: string;
  @IsString() @MinLength(6) password: string;
}`,

  'projects/dto/create-project.dto.ts': `import { IsString, IsNotEmpty, IsOptional, IsArray, IsBoolean, IsNumber } from 'class-validator';
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
}`,

  'contacts/dto/create-contact.dto.ts': `import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
export class CreateContactDto {
  @IsString() @IsNotEmpty() name: string;
  @IsEmail() email: string;
  @IsString() @IsOptional() phone?: string;
  @IsString() @IsNotEmpty() subject: string;
  @IsString() @IsNotEmpty() message: string;
}`,

  'auth/dto/login.dto.ts': `import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
export class LoginDto {
  @IsEmail() email: string;
  @IsString() @IsNotEmpty() password: string;
}`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(baseDir, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}
console.log('Entities and DTOs generated successfully.');
