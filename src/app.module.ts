import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { ControllModule } from './controll/controll.module';
import { ProvidController } from './provid/provid.controller';
import { ProvidModule } from './provid/provid.module';

@Module({
  imports: [CatsModule, ControllModule, ProvidModule, ProvidModule],
  controllers: [AppController, ProvidController],
  providers: [AppService],
})
export class AppModule {}
