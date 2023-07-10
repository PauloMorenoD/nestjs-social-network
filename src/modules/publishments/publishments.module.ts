import { Module } from '@nestjs/common';
import { PublishmentsService } from './publishments.service';
import { PublishmentsController } from './publishments.controller';

@Module({
  controllers: [PublishmentsController],
  providers: [PublishmentsService]
})
export class PublishmentsModule {}
