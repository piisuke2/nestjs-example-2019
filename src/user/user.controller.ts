import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { HelloDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:name')
  getHello(@Param('name') name: string): string {
    return this.userService.getHello(name);
  }

  @Post()
  postHello(@Body() helloDto: HelloDto) {
    return this.userService.getHello(helloDto.name + ':' + helloDto.age);
  }
}
