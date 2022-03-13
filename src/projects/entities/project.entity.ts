import { IProject } from './Iproject.interface';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IPerson } from '../../persons/entities/Iperson.interface';
import { EntityBase } from '../../common/utils/entity-base';

@Entity()
export class Project extends EntityBase implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany('Person', 'project')
  persons: IPerson[];

}