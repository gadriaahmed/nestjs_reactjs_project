import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Project } from './entities/project.entity';
import { ProjectsService } from './projects.service';


@Crud({
  model: {
    type: Project,
  },
})
@Controller('projects')
export class ProjectsController implements CrudController<Project> {
  constructor(public service: ProjectsService) {
  }

  get base(): CrudController<Project> {
    return this;
  }
}