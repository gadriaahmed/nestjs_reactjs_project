import { IPerson } from './Iperson.interface';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IProject } from '../../projects/entities/Iproject.interface';
import { JoinColumn } from 'typeorm';
import { EntityBase } from '../../common/utils/entity-base';

@Entity()
export class Person extends EntityBase implements IPerson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne("Project")
  @JoinColumn({ name:'project_id' })
  project : IProject;
}