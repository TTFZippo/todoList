/*
 * @Author: PacificD
 * @Date: 2021-10-08 20:01:32
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 21:10:35
 * @Description: todo dto
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateTodoDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly content: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumberString()
    readonly user: number;
}
