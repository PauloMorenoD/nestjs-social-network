import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentsRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private commentsRepository: CommentsRepository){}
  async create(createCommentDto: CreateCommentDto, userId: number, postId: number) {
    return await this.commentsRepository.create(createCommentDto, userId, postId);
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentsRepository.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.commentsRepository.delete(id)
  }
  async findComment(id: number) {
    return await this.commentsRepository.findComment(id)
  }
}
