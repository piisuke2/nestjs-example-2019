import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly log = new Logger(UserService.name);

  getHello(name: string): string {
    this.log.log('logging test');
    return `Hello ${name}!`;
  }
}
