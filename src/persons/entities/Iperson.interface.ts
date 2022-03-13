import { IProject } from '../../projects/entities/Iproject.interface';

export interface IPerson {
  id: number;
  firstName: string;
  lastName:string;
  project : IProject;
}