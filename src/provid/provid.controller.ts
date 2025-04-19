import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProvidService } from './provid.service';
import { CraeteProvidDto } from './dto/provid.dto';
import { Provid } from './interface/provide.interface';

@Controller('provid')
export class ProvidController {
    constructor(private providServise: ProvidService) {}

    @Post()
    async create(@Body()createProvid: CraeteProvidDto) {
        this.providServise.create(createProvid);
    }

    @Get()
    async findAll() : Promise<Provid[]> {
        return this.providServise.findAll();
    }
}
