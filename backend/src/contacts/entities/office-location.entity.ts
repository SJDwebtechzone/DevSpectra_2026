import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('office_locations')
export class OfficeLocation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @Column('text')
  address: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  hours: string;

  @Column({ default: 'Open Now' })
  status: string;

  @Column('text')
  embedUrl: string;

  @Column('text', { nullable: true })
  directUrl: string;

  @Column({ default: false })
  isPrimary: boolean;

  @Column({ default: 1 })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
