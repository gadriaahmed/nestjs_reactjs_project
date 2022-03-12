import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }
}