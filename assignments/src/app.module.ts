import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { PrimeModule } from './prime/prime.module';

@Module({
  imports: [FibonacciModule, PrimeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
