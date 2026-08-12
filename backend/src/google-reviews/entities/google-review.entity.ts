import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('google_reviews')
export class GoogleReview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  googleReviewId: string;

  @Column()
  authorName: string;

  @Column({ nullable: true })
  authorPhoto: string;

  @Column({ nullable: true })
  profilePhotoUrl: string;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'text' })
  reviewText: string;

  @Column({ nullable: true })
  relativeTime: string;

  @Column({ type: 'timestamp', nullable: true })
  reviewTimestamp: Date;

  @Column({ nullable: true })
  language: string;

  @Column({ nullable: true })
  authorUrl: string;

  @Column({ default: true })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
