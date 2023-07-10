import { Test, TestingModule } from '@nestjs/testing';
import { PublishmentsController } from './publishments.controller';
import { PublishmentsService } from './publishments.service';

describe('PublishmentsController', () => {
  let controller: PublishmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishmentsController],
      providers: [PublishmentsService],
    }).compile();

    controller = module.get<PublishmentsController>(PublishmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
