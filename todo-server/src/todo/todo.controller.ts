/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:53:56
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 20:21:46
 * @Description: 
 */
import { CreateTodoDto } from './dto/creat-todo.dto';
import { Body, Controller, Delete, Param, Post, Get, Patch, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('todo')
@UseGuards(AuthGuard('jwt'))
@ApiTags('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  //add new todo
  @Post()
  @ApiOperation({
    summary: "add a todo"
  })
  addTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.add(createTodoDto);
  }

  //remove a todo - resul API
  @Delete(':id')
  @ApiOperation({
    summary: "delete a todo by ID"
  })
  deleteTodo(@Param('id') id: number) {
    return this.todoService.remove(id);
  }

  //find all by userID
  @Get(':userID')
  @ApiOperation({
    summary: "get all todoes by userID"
  })
  getAllTodo(@Param('userID') userID: number) {
    return this.todoService.findAll(userID);
  }

  //update a todo
  @Patch()
  @ApiOperation({
    summary: "update a todo"
  })
  updateTodo(@Body() body: UpdateTodoDto) {
    return this.todoService.update(body);
  }
}
