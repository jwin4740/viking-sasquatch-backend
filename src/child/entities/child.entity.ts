import { Factory } from 'src/factory/entities/factory.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  IsNull,
} from 'typeorm';

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  //TODO: don't allow Null
  @ManyToOne(() => Factory, (factory) => factory.children, {
    onDelete: 'CASCADE',
  })
  factory: Factory;
}
