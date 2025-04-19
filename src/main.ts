import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { NestFastifyApplication } from '@nestjs/platform-fastify';
// import { FastifyAdapter } from '@nestjs/platform-fastify';
// import { NestExpressApplication } from '@nestjs/platform-express';
// import * as qs from 'qs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const app = await NestFactory.create<NestExpressApplication>(AppModule); ---> add express

  // app.set('query parser', 'extended'); ----> pars query

  // const app = await NestFactory.create<NestFastifyApplication>( ---> add fastify
  //   AppModule,
  //   new FastifyAdapter({
  //     querystringParser: (str) => qs.parse(str), ----> parse query
  //   }),
  // );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
