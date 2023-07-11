import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { PrismaService } from 'src/database/prisma.service';
/* import { LikesPrismaRepository } from './prisma/likes.prisma.repositories'; */

@Module({
  controllers: [LikesController],
  providers: [
    LikesService, 
    PrismaService,
/*     {
      provide: LikesRepository,
      useClass:LikesPrismaRepository
    } */
  ]
})
export class LikesModule {}
