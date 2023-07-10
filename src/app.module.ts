import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { CommentsModule } from './modules/comments/comments.module';
import { FollowersModule } from './modules/followers/followers.module';
import { PublishmentsModule } from './modules/publishments/publishments.module';

@Module({
  imports: [UsersModule, CommentsModule, FollowersModule, PublishmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
