import { Injectable } from '@nestjs/common';
import { CreatePublishmentDto } from './dto/create-publishment.dto';
import { UpdatePublishmentDto } from './dto/update-publishment.dto';

@Injectable()
export class PublishmentsService {
  create(createPublishmentDto: CreatePublishmentDto) {
    return 'This action adds a new publishment';
  }

  findAll() {
    return `This action returns all publishments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} publishment`;
  }

  update(id: number, updatePublishmentDto: UpdatePublishmentDto) {
    return `This action updates a #${id} publishment`;
  }

  remove(id: number) {
    return `This action removes a #${id} publishment`;
  }
}
