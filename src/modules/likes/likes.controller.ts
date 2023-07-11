import { Controller, Get, Post, Request, Param, Delete, UseGuards } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  create(@Request() req:any, @Param('id') id:number) {
    return this.likesService.create(+req.user.id, id);
  }
  
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findAll(postId: number) {
    return this.likesService.findAll(postId);
  }
  
  
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
