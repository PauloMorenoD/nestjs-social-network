import { CreatePublishmentDto } from "../dto/create-publishment.dto";
import { UpdatePublishmentDto } from "../dto/update-publishment.dto";
import { Publishment } from "../entities/publishment.entity";


export abstract class PostsRepository {
    abstract create(data: CreatePublishmentDto, userId: number): Promise<Publishment>;
    abstract findPost(id:number): Promise<Publishment>;
    abstract findAll(): Promise<Publishment[]>;
    abstract update(id:number, data: UpdatePublishmentDto): Promise<Publishment>;
    abstract delete(id:number): Promise<void>;
}