import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsynclocalstorageModule } from './asynclocalstorage/asynclocalstorage.module';
import { AsynclocalstorageMiddleware } from './asynclocalstorage/asynclocalstorage.middleware';

@Module({
  imports: [AsynclocalstorageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(AsynclocalstorageMiddleware).forRoutes('*');
  };
}
