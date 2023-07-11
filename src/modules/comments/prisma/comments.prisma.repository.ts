import { Injectable } from "@nestjs/common";
import { CommentsRepository } from "../repositories/comments.repository";
import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { Comment } from "../entities/comment.entity";
import { PrismaService } from "src/database/prisma.service";

@Injectable()

export class CommentsPrismaRepository implements CommentsRepository {
    constructor(private prisma: PrismaService) { }
    
    async create(data: CreateCommentDto, userId: number, postId: number): Promise<any> {
        const comment = new Comment()
        
        Object.assign(comment, { ...data, userId: +userId, postId: +postId })
        
        const newComment = await this.prisma.comment.create({
            data: {
                ...comment
            },
            select: {
                id: true,
                description: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        
                    }
                }
            }
        })
        return newComment
    }

    
    
    async findComment(id: number): Promise<Comment> {
        return this.prisma.comment.findUnique({
            where: { id }
        })
    }
    
    
    
    async findPostComment(id: number): Promise<any[]> {
        return await this.prisma.comment.findMany({
            where: { id },
            select: {
                id: true,
                description: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        name: true,

                    }
                }
            }
        })
    }


    
    async update(id: number, data: UpdateCommentDto): Promise<any> {
        const updatedComment = await this.prisma.comment.update({
            where: { id },
            data: { ...data },
            select: {
                id: true,
                description: true,
                createdAt: true,
                user: {
                    select: {
                        id: true,
                        name: true,
                        
                    }
                }
            }
        })
        return updatedComment
    }



    async delete(id: number): Promise<void> {
        await this.prisma.comment.delete({ where: { id } })
    }
}