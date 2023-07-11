import { Injectable } from "@nestjs/common";
import { PostsRepository } from "../repositories/posts.repository";
import { CreatePublishmentDto } from "../dto/create-publishment.dto";
import { UpdatePublishmentDto } from "../dto/update-publishment.dto";
import { Publishment } from "../entities/publishment.entity";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class PostPrismaRepository implements PostsRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreatePublishmentDto, userId: number): Promise<any> {
        const publishment = new Publishment()

        Object.assign(publishment, { ...data, userId: +userId })

        const newPublishment = await this.prisma.post.create({
            data: {
                ...publishment
            },
            select: {
                id:true,
                name: true,
                description: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        bio: true,
                        createdAt: true
                    }
                },
                comments: true,
                likes: true
            }
        })
        return newPublishment
    }
    async findPost(id: number): Promise<any> {

        return this.prisma.post.findUnique({
            where: { id },
            select: {
                id:true,
                name: true,
                description: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        bio: true,
                        createdAt: true
                    }
                },
                comments: true,
                likes: true
            }

        })
    }
    async findAll(): Promise<any[]> {
        return this.prisma.post.findMany({
            select: {
                id:true,
                name: true,
                description: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        bio: true,
                        createdAt: true
                    }
                },
                comments: true,
                likes: true
            }
        })
    }
    async update(id: number, data: UpdatePublishmentDto): Promise<any> {

        const post = await this.prisma.post.update({
            where: { id },
            data: { ...data },
            select: {
                id:true,
                name: true,
                description: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        bio: true,
                        createdAt: true
                    }
                },
                comments: true,
                likes: true
            }
        })

        return post
    }
    async delete(id: number): Promise<void> {

        await this.prisma.post.delete({ where: { id } })
    }

}