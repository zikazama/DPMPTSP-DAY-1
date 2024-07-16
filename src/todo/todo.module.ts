import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodoService, JwtService],
  controllers: [TodoController],
  exports: [TypeOrmModule]
})
export class TodoModule {}
