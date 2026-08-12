import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  googleReviewId: string;

  @Column()
  reviewerName: string;

  @Column({ nullable: true })
  reviewerPhoto: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text' })
  reviewText: string;

  @Column({ type: 'timestamp', nullable: true })
  reviewDate: Date;

  @Column({ default: false })
  isVerified: boolean;

  @Column({ default: 'Google' })
  source: string;

  @Column({ nullable: true })
  profileUrl: string;

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: true })
  isPublished: boolean;

  @Column({ type: 'int', default: 0 })
  displayOrder: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
