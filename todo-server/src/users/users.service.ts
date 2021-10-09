/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 20:44:05
 * @Description: 
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { stateCode, Result } from "../config/resultType"
import { resolve } from 'path/posix';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/config/jwtConstants';

@Injectable()
export class UsersService {

  //inject usersRepository
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) { }


  //findOne user by ID or userName
  async findOne(param: number | string): Promise<boolean> {
    let result: boolean;
    if (typeof param === 'string') {
      //userName
      await this.userRepository.findOne({ userName: param as string })
        .then(res => {
          result = res ? true : false;
        })
    } else {
      //id
      await this.userRepository.findOne(param as number)
        .then(res => {
          result = res ? true : false;
        })
    }

    return result;
  }


  async register(createUserDto: CreateUserDto): Promise<Result> {
    let result: Result;
    console.log("create new user: ", JSON.stringify(createUserDto));

    let newUser = new User();

    let isID = true;
    //check ID
    while (isID) {
      //set random ID
      newUser.id = Math.round(Math.random() * (89999999) + 10000000);
      isID = await this.findOne(newUser.id);
    }

    newUser.userName = createUserDto.userName;
    newUser.password = createUserDto.password;

    //check userName
    let isUserExisted = await this.findOne(newUser.userName);
    result = isUserExisted ?
      Result.fail(stateCode.EXISTED, "userName has been used!") :
      Result.success(newUser);
    !isUserExisted && this.userRepository.insert(newUser);
    return result;
  }


  async login(createUserDto: CreateUserDto): Promise<Result> {
    let result: Result;
    await this.userRepository.find({
      userName: createUserDto.userName
    })
      .then(res => {
        if (res.length > 0) {
          return true;
        } else {
          result = Result.fail(stateCode.NO_FIND, "can not find user");
          return false;
        }
      })
      .then(async (isUser) => {
        if (!isUser) return;

        await this.userRepository.find({
          userName: createUserDto.userName,
          password: createUserDto.password
        })
          .then(res => {
            if (res.length > 0) {
              //success
              let token = this.jwtService.sign({
                userName: createUserDto.userName,
                password: createUserDto.password
              });


              result = Result.success({
                id: res[0].id,
                user: res[0].userName,
                token: token
              })
            } else {
              //password error
              result = Result.fail(stateCode.BAD_REQUEST, "password error");
            }
          })
      })

    return result;
  }


  async remove(id: number): Promise<Result> {
    let result: Result;
    await this.userRepository.delete(id).then(res => {
      result = res.affected ?
        Result.success("successfully delete!") :
        Result.fail(stateCode.NO_FIND, "error! user not exist!");
    });
    return result;
  }
}
