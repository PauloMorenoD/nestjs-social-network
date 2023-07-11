import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { PublishmentsService } from './publishments.service';
import { CreatePublishmentDto } from './dto/create-publishment.dto';
import { UpdatePublishmentDto } from './dto/update-publishment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('publishments')
export class PublishmentsController {
  constructor(private readonly publishmentsService: PublishmentsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createPublishmentDto: CreatePublishmentDto, @Request() req :any) {
    return this.publishmentsService.create(createPublishmentDto, req.user.id);
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
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updatePublishmentDto: UpdatePublishmentDto) {
    return this.publishmentsService.update(+id, updatePublishmentDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.publishmentsService.remove(+id);
  }
}
