import { CreateCommentDto } from "../dto/create-comment.dto";
import { UpdateCommentDto } from "../dto/update-comment.dto";
import { Comment } from "../entities/comment.entity";



export abstract class CommentsRepository {
    abstract create(data: CreateCommentDto, userId: number, postId:number): Promise<Comment>;
    abstract update(id:number, data: UpdateCommentDto): Promise<Comment>;
    abstract delete(id:number): Promise<void>;
    abstract findComment(id:number): Promise<Comment>;
    abstract findPostComment(id:number): Promise<Comment[]>;
}