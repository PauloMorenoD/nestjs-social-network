import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PublishmentsService } from './publishments.service';
import { CreatePublishmentDto } from './dto/create-publishment.dto';
import { UpdatePublishmentDto } from './dto/update-publishment.dto';

@Controller('publishments')
export class PublishmentsController {
  constructor(private readonly publishmentsService: PublishmentsService) {}

  @Post()
  create(@Body() createPublishmentDto: CreatePublishmentDto) {
    return this.publishmentsService.create(createPublishmentDto);
  }

  @Get()
  findAll() {
    return this.publishmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.publishmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePublishmentDto: UpdatePublishmentDto) {
    return this.publishmentsService.update(+id, updatePublishmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.publishmentsService.remove(+id);
  }
}
