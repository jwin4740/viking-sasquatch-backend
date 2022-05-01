import { Child } from 'src/child/entities/child.entity';
import { utils } from 'src/utils';
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

  @Column({ default: utils.defaultMinChildren, nullable: false })
  lowerBoundChildNodes: number;

  @Column({ default: utils.defaultMaxChildren, nullable: false })
  upperBoundChildNodes: number;

  @Column({ default: utils.defaultMaxChildren, nullable: false })
  numberChildrenToCreate: number;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Child, (child) => child.factory, { onDelete: 'CASCADE' })
  children: Child[];
}
