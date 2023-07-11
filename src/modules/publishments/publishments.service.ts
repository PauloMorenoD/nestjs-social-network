import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePublishmentDto } from './dto/create-publishment.dto';
import { UpdatePublishmentDto } from './dto/update-publishment.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PublishmentsService {
  constructor(private PostsRepository: PostsRepository){}

 async create(createPublishmentDto: CreatePublishmentDto, userId: number) {
    return await this.PostsRepository.create(createPublishmentDto, userId);
  }

  async findAll() {
    return await this.PostsRepository.findAll()
  }

  async findOne(id: number) {
    const post = await this.PostsRepository.findPost(id)

    if(!post) throw new NotFoundException("post not found!")
    
    return post
  }

  async update(id: number, updatePublishmentDto: UpdatePublishmentDto) {

    const post = this.PostsRepository.findPost(id)

    if(!post) throw new NotFoundException("post not found!")

    return await this.PostsRepository.update(id, updatePublishmentDto)
  }

  async remove(id: number) {

    const post = await this.PostsRepository.findPost(id)

    if(!post) throw new NotFoundException("post not found!")

    await this.PostsRepository.delete(id)
  }
}
