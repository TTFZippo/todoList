/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:13:25
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 21:05:24
 * @Description: update todo dto
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateTodoDto {
    @ApiProperty()
    @IsNumberString()
    @IsNotEmpty()
    readonly id: number;

    @ApiProperty()
    @IsNotEmpty()
    readonly content: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    readonly state: number; //0. todo 1. done
}
