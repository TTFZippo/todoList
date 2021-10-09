import { UpdateTodoDto } from './dto/update-todo.dto';
/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:53:56
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 10:03:11
 * @Description: 
 */
import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/creat-todo.dto';
import getTime from 'src/utils/time';
import { Result, stateCode } from 'src/config/resultType';

@Injectable()
export class TodoService {

    //inject todoRepository
    constructor(@InjectRepository(Todo)
    private todoRepository: Repository<Todo>
    ) { }


    //findOne todo by ID
    async findOne(id: number): Promise<boolean> {
        let result: boolean;
        await this.todoRepository.findOne(id)
            .then(res => {
                result = res ? true : false;
            })

        return result;
    }


    async add(createTodoDto: CreateTodoDto): Promise<InsertResult> {
        console.log("create new todo: ", JSON.stringify(createTodoDto));

        let newTodo = new Todo();

        let isID = true;
        //check ID
        while (isID) {
            //set random ID
            newTodo.id = Math.round(Math.random() * (89999999) + 10000000);
            isID = await this.findOne(newTodo.id);
        }

        newTodo.content = createTodoDto.content;
        newTodo.time = getTime();
        newTodo.user = createTodoDto.user;

        return this.todoRepository.insert(newTodo);
    }


    async remove(id: number): Promise<Result> {
        let result: Result;
        await this.todoRepository.delete(id).then(res => {
            result =
                res.affected ?
                    Result.success('successfully remove!') :
                    Result.fail(stateCode.NO_FIND, 'error! can not find todo!');
        })

        return result;
    }


    async findAll(userID: number): Promise<Result> {
        let result: Result;
        await this.todoRepository.find({ user: userID }).then(res => {
            result = res.length ?
                Result.success(res) :
                Result.fail(stateCode.NO_FIND, 'user not exist or user has not todo-list!');
        })

        return result;
    }


    async update(body: UpdateTodoDto): Promise<any> {
        let result: Result;
        await this.todoRepository.update(
            //UPDATE todo SET content,time WHERE id = body.id;
            body.id,
            {
                content: body.content,
                time: getTime()
            }
        ).then(res => {
            result = res.affected ?
                Result.success("successfully update!") :
                Result.fail(stateCode.NO_FIND, "fail to update! todo not exist");
        })

        return result;
    }
}
