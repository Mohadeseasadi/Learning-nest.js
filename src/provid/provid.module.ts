import { Module } from '@nestjs/common';
import { ProvidService } from './provid.service';
import { ProvidController } from './provid.controller';

@Module({
  controllers: [ProvidController] ,
  providers: [ProvidService] ,
  exports: [ProvidService]
})
export class ProvidModule {}
