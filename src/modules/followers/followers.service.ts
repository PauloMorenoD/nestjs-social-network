import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FollowersService {
  constructor(private prisma: PrismaService) { }
  async create(followerId: number, userId: number) {
    await this.prisma.follower.create({ data: { userId, followerId } })
  }

  async findAll(id: number) {
    return await this.prisma.follower.findMany({
      where: { userId: id },
      include:{
        user:{
          select:{
            id:true,
            name:true
          }
        }
      }
    })
  }

  async remove(id: number) {
    await this.prisma.follower.delete({ where: { id } });
  }
}
