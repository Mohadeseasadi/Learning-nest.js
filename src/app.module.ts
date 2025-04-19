import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ControllModule } from './controll/controll.module';

@Module({
  imports: [CatsModule, ControllModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
