/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:13:25
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 10:04:04
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
}
