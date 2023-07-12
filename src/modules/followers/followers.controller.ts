import { Controller, Get, Post, Request, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FollowersService } from './followers.service';

@Controller('follow')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  create(@Request() req:any, @Param('id') id:number) {
    return this.followersService.create(+req.user.id, id);
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findAll(postId: number) {
    return this.followersService.findAll(postId);
  }
  
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.followersService.remove(+id);
  }
}
