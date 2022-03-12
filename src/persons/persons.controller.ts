import { Crud, CrudController, CrudService } from '@nestjsx/crud';
import { Person } from './entities/person.entity';
import { Controller } from '@nestjs/common';
import { PersonsService } from './persons.service';


@Crud({
  model: {
    type: Person,
  },
})
@Controller('persons')
export class PersonsController implements CrudController<Person> {
  constructor(public service:PersonsService) {
  }

  get base(): CrudController<Person> {
    return this;
  }
}