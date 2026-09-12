import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('blogs')
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ unique: true, nullable: true })
  slug: string;

  @Column('text', { nullable: true })
  excerpt: string;

  @Column('text', { nullable: true })
  content: string;

  @Column({ nullable: true })
  image: string;

  @Column({ default: 'General' })
  category: string;

  @Column('simple-array', { nullable: true })
  tags: string[];

  @Column({ default: 'DevSpectra Team' })
  author: string;

  @Column({ default: '5 min read' })
  readTime: string;

  @Column({ default: false })
  isFeatured: boolean;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 0 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
