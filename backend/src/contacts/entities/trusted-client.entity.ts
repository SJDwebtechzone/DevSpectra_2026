import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('trusted_clients')
export class TrustedClient {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column() name: string;
  @Column() src: string;
  @Column({ default: true }) isActive: boolean;
  @Column({ default: 0 }) order: number;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
