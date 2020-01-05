import { Controller, Get, Post, Request, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService,
    private usersService: UsersService) {}

  @Post('auth/login')
  async login(@Request() req, @Res() res) {
    return this.usersService.validate(req.body, res);
  }

  @Post('auth/signUp')
  async signUp(@Request() req, @Res() res) {
    return this.usersService.create(req.body, res);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
