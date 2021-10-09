/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 17:04:59
 * @Description: 
 */
import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  @ApiOperation({
    summary: "delete a user by ID"
  })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(id);
  }

  //findUser by ID or userName
  @Get(':userName')
  @ApiOperation({
    summary: "find user by ID or userName, return boolean"
  })
  findOne(@Param('userName') userName: number | string) {
    let param = Number(userName) ?
      Number(userName) :
      userName;

    return this.usersService.findOne(param);
  }
}
