/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:36:14
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-09 09:51:08
 * @Description: 
 */
import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @Length(2, 16)
    readonly userName: string;

    @ApiProperty()
    @Length(6, 16)
    readonly password: string;
}
