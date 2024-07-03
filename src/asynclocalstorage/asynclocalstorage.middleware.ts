import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class AsynclocalstorageMiddleware implements NestMiddleware {

  constructor(private readonly als: AsyncLocalStorage<any>){}

  use(req: Request, res: Response, next: NextFunction) {

    const storage = {
      correlationKey: req.headers['x-correlation-key'],
      authentication: req.headers['authentication'],
      userId: req.headers['x-user-id'],
    };
    this.als.run(storage, () => {
      next();
    });
  }
}
