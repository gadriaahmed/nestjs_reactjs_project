import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(public authService:AuthService) {
  }

  @Post('register')
  async register(@Body() user: User){
   await this.authService.register(user);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req ) {
    debugger;
    return this.authService.loginWithCredentials(req.user);
  }
}