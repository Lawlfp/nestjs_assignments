import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/factorial')
export class FactorialController {

  @Get(':number')
  calculateFactorial(@Param('number') num: string) {
    const number = parseInt(num, 10);
    if (isNaN(number) || number < 0) {
      return 'Enter a valid non-negative integer.';
    }

    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return { factorial };
  }
}
