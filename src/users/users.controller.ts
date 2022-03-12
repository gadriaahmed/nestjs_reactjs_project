import { Crud, CrudController } from '@nestjsx/crud';
import { User } from './entities/user.entity';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Crud({
  model: {
    type: User,
  },
})
@Controller('Users')
export class UsersController implements CrudController<User>{
  constructor(public service: UsersService) {
  }

  get base(): CrudController<User> {
    return this;
  }
}