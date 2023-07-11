import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LikesService {
  constructor(private prisma: PrismaService) { }
  async create(userId: number, postId: number) {
    await this.prisma.like.create({ data: { userId, postId } })
  }

  async findAll(id: number) {
    return await this.prisma.like.findMany({
      where: { postId: id }
    })
  }

  async remove(id: number) {
    await this.prisma.like.delete({ where: { id } });
  }
}
