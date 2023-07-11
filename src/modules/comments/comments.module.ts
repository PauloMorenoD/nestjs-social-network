import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CommentsPrismaRepository } from './prisma/comments.prisma.repository';
import { CommentsRepository } from './repositories/comments.repository';

@Module({
  controllers: [CommentsController],
  providers: [
    CommentsService,
    PrismaService,
    {
      provide: CommentsRepository,
      useClass: CommentsPrismaRepository
    },
  ]
})
export class CommentsModule {}
