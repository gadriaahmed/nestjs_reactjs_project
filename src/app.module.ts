import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { PersonsModule } from './persons/persons.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProjectsModule,
    PersonsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
