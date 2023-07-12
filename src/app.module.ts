import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CommentsModule } from './modules/comments/comments.module';

import { PublishmentsModule } from './modules/publishments/publishments.module';
import { AuthModule } from './modules/auth/auth.module';
import { LikesModule } from './modules/likes/likes.module';
import { FollowersModule } from './modules/followers/followers.module';

@Module({
  imports: [UsersModule, CommentsModule, PublishmentsModule, AuthModule, LikesModule, FollowersModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
