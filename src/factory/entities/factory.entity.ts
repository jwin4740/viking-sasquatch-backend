import { Child } from 'src/child/entities/child.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Factory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ default: 1, nullable: false })
  lowerBoundChildNodes: Number;

  @Column({ default: 15, nullable: false })
  upperBoundChildNodes: Number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Child, (child) => child.factory, { onDelete: 'CASCADE' })
  children: Child[];
}
