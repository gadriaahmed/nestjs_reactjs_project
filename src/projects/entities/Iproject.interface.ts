import { IPerson } from '../../persons/entities/Iperson.interface';

export interface IProject {
  id:number;
  title: string;
  persons: IPerson[];
}