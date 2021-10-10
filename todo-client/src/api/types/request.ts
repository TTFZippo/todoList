/*
 * @Author: PacificD
 * @Date: 2021-10-09 21:17:04
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 21:19:06
 * @Description: request type
 */
export interface ILogin {
    userName: string;
    password: string;
}

export interface IRegister {
    userName: string;
    password: string;
}

export interface IAddTodo {
    content: string;
    user: number; //userID
}

export interface IUpdateTodo {
    content: string;
    user: number; //userID
    state: number; //0. todo, 1. done
}
