/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 20:11:04
 * @Description: 
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { stateCode, Result } from "../config/resultType"

@Injectable()
export class UsersService {
  //inject usersRepository
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async register(createUserDto: CreateUserDto): Promise<InsertResult> {
    console.log("create new user: ", JSON.stringify(createUserDto));

    let newUser = new User();

    //set random ID
    newUser.id = Math.round(Math.random() * (89999999) + 10000000);

    //check ID
    await this.userRepository.findOne(newUser.id).then((res) => {
      if (res) {
        console.log(`id: ${newUser.id} is already existed`);
        newUser.id = Math.round(Math.random() * (89999999) + 10000000);
      }
    })

    newUser.userName = createUserDto.userName;
    newUser.password = createUserDto.password;

    return this.userRepository.insert(newUser);
  }

  async login(createUserDto: CreateUserDto): Promise<Result> {
    let result: Result;
    await this.userRepository.find({ userName: createUserDto.userName })
      .then(res => {
        if (res.length > 0) {
          result = Result.success({
            id: res[0].id,
            user: res[0].userName
          })
        } else {
          result = Result.fail(stateCode.NO_FIND, "can not find user");
        }
      })
      .catch(err => {
        console.log("err: ", err);
      })

    return result;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
