import { IProject } from './Iproject.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Project implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}