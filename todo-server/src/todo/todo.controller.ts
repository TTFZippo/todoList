import { UpdateTodoDto } from './dto/update-todo.dto';
/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:53:56
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 21:21:13
 * @Description: 
 */
import { CreateTodoDto } from './dto/creat-todo.dto';
import { Body, Controller, Delete, Param, Post, Get, Patch } from '@nestjs/common';
import { TodoService } from './todo.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  //add new todo
  @Post()
  addTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.add(createTodoDto);
  }

  //remove a todo - resul API
  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.remove(id);
  }

  //find all by userID
  @Get(':userID')
  getAllTodo(@Param('userID') userID: number) {
    return this.todoService.findAll(userID);
  }

  //update a todo
  @Patch()
  updateTodo(@Body() body: UpdateTodoDto) {
    return this.todoService.update(body);
  }
}
