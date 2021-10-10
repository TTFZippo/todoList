/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:54:31
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 21:08:13
 * @Description:
 */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryColumn()
    id: number;

    @Column()
    content: string;

    @Column({ default: 0 }) //0. todo, 1. done
    state: number;

    @Column()
    time: string;

    @Column()
    user: number; //userID
}