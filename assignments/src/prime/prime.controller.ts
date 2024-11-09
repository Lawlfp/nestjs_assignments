import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/prime')
export class PrimeController {
  @Get(':number')
  checkPrime(@Param('number') num: string) {
    const number = parseInt(num, 10);
    if (isNaN(number) || number <= 1) {
      return 'Enter a positive integer greater than 1';
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return { isPrime: false }; 
      }
    }
    return { isPrime: true }; 
  }
}
