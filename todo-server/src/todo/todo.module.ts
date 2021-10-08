/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:53:56
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 20:12:09
 * @Description: 
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { Todo } from './entities/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule { }
