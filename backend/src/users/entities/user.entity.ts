import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
export enum UserRole { SUPER_ADMIN = 'SUPER_ADMIN', ADMIN = 'ADMIN' }
@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column({ unique: true }) email: string;
  @Column({ select: false }) password: string;
  @Column({ type: 'enum', enum: UserRole, default: UserRole.SUPER_ADMIN }) role: UserRole;
  @Column({ name: 'is_active', default: true }) isActive: boolean;
  @Column({ name: 'last_login', nullable: true }) lastLogin: Date;
  @CreateDateColumn({ name: 'created_at' }) createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' }) updatedAt: Date;
}