import { Module } from '@nestjs/common';
import { PublishmentsService } from './publishments.service';
import { PublishmentsController } from './publishments.controller';
import { PostsRepository } from './repositories/posts.repository';
import { PostPrismaRepository } from './prisma/posts.prisma.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [PublishmentsController],
  providers: [
    PublishmentsService,
    PrismaService,
    {
      provide: PostsRepository,
      useClass: PostPrismaRepository
    },
  ]
})
export class PublishmentsModule {}
