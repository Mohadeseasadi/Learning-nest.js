import { Module } from '@nestjs/common';
import { ControllController } from './controll.controller';

@Module({
  controllers: [ControllController],
})
export class ControllModule {}
