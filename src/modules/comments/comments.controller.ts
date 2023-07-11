import { Controller, Request, Post, Body, Patch, Param, Delete, UseGuards, NotFoundException } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) { }

  @Post(':id')
  @UseGuards(JwtAuthGuard)
  create(@Body() createCommentDto: CreateCommentDto, @Request() req: any, @Param('id') postId: number) {
    return this.commentsService.create(createCommentDto, req.user.id, postId);
  }


  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto) {

    const comment = this.commentsService.findComment(id)

    if (!comment) throw new NotFoundException(`Comment not found!`);
    
    return this.commentsService.update(+id, updateCommentDto);
  }


  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: number) {
    
    const comment = this.commentsService.findComment(id)

    if (!comment) throw new NotFoundException(`Comment not found!`);

    return this.commentsService.remove(+id);
  }
}
