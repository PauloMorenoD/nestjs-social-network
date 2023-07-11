import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { UserLoginDto } from './dto/user-login.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user : UserLoginDto){
    return this.authService.login(user.email)
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req:any){
    return req.user
  }

}
