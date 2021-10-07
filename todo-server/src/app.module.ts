/*
 * @Author: PacificD
 * @Date: 2021-10-07 11:53:54
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 22:32:45
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import ormConfig from './config/ormConfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
