import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { PrimeModule } from './prime/prime.module';
import { FactorialModule } from './factorial/factorial.module';

@Module({
  imports: [FibonacciModule, PrimeModule, FactorialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
