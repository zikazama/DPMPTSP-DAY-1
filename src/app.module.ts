import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [UserModule, TodoModule],
  controllers: [AppController, UserControllerController],
  providers: [AppService, UserServiceService],
})
export class AppModule {}
