import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('search')
  fetch(@Req() request: Request): result {
    console.log(request.query);
    const {
      text = '',
      sortby = null,
      orderby = 'asc',
      skip = 0,
      limit = 100,
    } = request.query as query;
    let actualtext;
    try {
      actualtext = JSON.parse(text);
    } catch (e) {
      if (text.trim()) {
        actualtext = text.replace(/'/gi, '');
        actualtext = actualtext.split(' ');
      }
    }
    return this.appService.fetch(actualtext, sortby, orderby, skip, limit);
  }
}
