/*
 * @Author: PacificD
 * @Date: 2021-10-07 11:53:54
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 18:42:04
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TodoModule } from './todo/todo.module';
import ormConfig from './config/ormConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
    TodoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
