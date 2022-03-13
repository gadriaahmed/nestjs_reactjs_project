import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService extends TypeOrmCrudService<User>{
  constructor(@InjectRepository(User) repo) {
    super(repo)
  }
  async saveUser(user: User) {
    const count = await this.repo.count({
      where: { username: user.username },
    });
    if (count > 0) {
      throw new BadRequestException({
        message: 'Email already exists',
      });
    }
    return this.repo.save(user);
  }
}