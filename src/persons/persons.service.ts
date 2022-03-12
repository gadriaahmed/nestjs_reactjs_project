import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Person } from './entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonsService extends TypeOrmCrudService<Person> {
  constructor(@InjectRepository(Person) repo) {
    super(repo);
  }
}