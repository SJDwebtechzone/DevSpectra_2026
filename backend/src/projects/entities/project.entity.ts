import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
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
}