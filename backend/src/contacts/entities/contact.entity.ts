import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('contacts')
export class Contact {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({ nullable: true }) name: string;
  @Column({ nullable: true }) email: string;
  @Column({ nullable: true }) phone: string;
  @Column({ nullable: true }) subject: string;
  @Column('text', { nullable: true }) message: string;
  @Column('json', { nullable: true }) customData: Record<string, any>;
  @Column({ default: false }) isRead: boolean;
  @CreateDateColumn() createdAt: Date;
}