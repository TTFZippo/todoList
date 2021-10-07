/*
 * @Author: PacificD
 * @Date: 2021-10-07 22:24:07
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-07 22:33:11
 * @Description:
 */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const ormConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pacific_D148',
    database: 'todo',
    charset: 'utf8', //设置chatset编码为utf8
    synchronize: true,
    autoLoadEntities: true, //自动加载实体
}

export default ormConfig;