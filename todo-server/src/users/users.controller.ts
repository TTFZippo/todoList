import { ApiTags } from '@nestjs/swagger';
/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 21:21:31
 * @Description: 
 */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    return this.usersService.login(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
