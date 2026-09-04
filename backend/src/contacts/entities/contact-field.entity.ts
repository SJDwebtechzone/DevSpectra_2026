import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('contact_fields')
export class ContactField {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column()
  name: string;

  @Column({ default: 'text' })
  type: string;

  @Column({ nullable: true })
  placeholder: string;

  @Column('json', { nullable: true })
  options: string[];

  @Column({ default: true })
  isRequired: boolean;

  @Column({ default: false })
  halfWidth: boolean;

  @Column({ default: 1 })
  order: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;
}
