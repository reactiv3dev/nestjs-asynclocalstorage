import { Injectable, Logger } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly als: AsyncLocalStorage<any>){}
  getHello(): string {
    const storage = this.als.getStore();
    this.logger.log(storage);

    return storage;
  }
      
}
