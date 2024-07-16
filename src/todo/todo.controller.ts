import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { RolesGuard } from 'src/user/guard/jwt.guard';
import { Roles } from 'src/user/roles.decorator';
import { ApiResponse } from '@nestjs/swagger';


@Controller('todo')
@UseGuards(RolesGuard)
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @Roles('admin')
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @Roles('user', 'admin')
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @Roles('user', 'admin')
  @ApiResponse({ status: 200, description: 'Get a specific todo by ID' })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  @Roles('admin')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}