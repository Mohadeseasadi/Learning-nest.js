import { Injectable, Optional, Inject } from '@nestjs/common';
import { Provid } from './interface/provide.interface';

@Injectable()
export class ProvidService {

    private readonly provid: Provid[] = []
    
    
    create(provid: Provid) {
        this.provid.push(provid);
    }

    findAll(): Provid[]{
        return this.provid
    }

}


@Injectable()
export class HttpService<T> {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
}

@Injectable()
export class HttpServiceWithoutConstructor<T> {
  @Inject('HTTP_OPTIONS')
  private readonly httpClient: T;
}

