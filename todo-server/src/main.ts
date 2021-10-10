/*
 * @Author: PacificD
 * @Date: 2021-10-07 11:53:54
 * @LastEditors: PacificD
 * @LastEditTime: 2021-10-10 15:32:24
 * @Description: main.ts
 */

/**
 * package:
 * swagger
 * class-validator, class-transformer
 * typeorm 
 * passport
 * JWT
 */

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

const port = 4096;

(async () => {
  const app = await NestFactory.create(AppModule);

  //配置全局管道
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  //开启CORS
  app.enableCors({
    credentials: true,
    methods: "GET,POST,PATCH,DELETE",
    origin: ["http://localhost:3000",]
  });

  //配置swagger
  const options = new DocumentBuilder()
    .setTitle('todoList-backend')
    .setDescription('The todo-list API')
    .setVersion('1.0')
    .addTag('user')
    .addTag('todo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port);
})();