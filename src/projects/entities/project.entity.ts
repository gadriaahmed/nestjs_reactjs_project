import { IProject } from './Iproject.interface';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
export class Project implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}