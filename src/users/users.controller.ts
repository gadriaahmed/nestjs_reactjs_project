import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { Controller, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/utils/jwt-auth.guard';

@UseGuards(
  JwtAuthGuard
)
@Crud({
  model: {
    type: User,
  },
})
@Controller('users')
export class UsersController implements CrudController<User>{
  constructor(public service: UsersService) {
  }

  get base(): CrudController<User> {
    return this;
  }
}