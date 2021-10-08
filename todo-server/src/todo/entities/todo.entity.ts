/*
 * @Author: PacificD
 * @Date: 2021-10-08 19:54:31
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-08 19:55:42
 * @Description:
 */
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    time: string;

    @Column()
    user: number; //userID
}