import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments/fibonacci')
export class FibonacciController {

  @Get(':number')
  getFibonacci(@Param('number') number: string) {
    const num = parseInt(number, 10);
    
    if (isNaN(num) || num < 0) {
      return 'Enter a positive integer.';
    }
    
    if (num === 0) return { calc: [0] }; 
    
    let calc = [0, 1];
    for (let i = 2; i < num; i++) {  
      calc.push(calc[i - 1] + calc[i - 2]);
    }
    
    return { calc };
  }
}
