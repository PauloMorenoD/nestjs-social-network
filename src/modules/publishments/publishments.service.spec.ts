import { Test, TestingModule } from '@nestjs/testing';
import { PublishmentsService } from './publishments.service';

describe('PublishmentsService', () => {
  let service: PublishmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublishmentsService],
    }).compile();

    service = module.get<PublishmentsService>(PublishmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
