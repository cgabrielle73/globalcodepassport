import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Biel, fiz meu primeiro deploy!!!';
  }
}