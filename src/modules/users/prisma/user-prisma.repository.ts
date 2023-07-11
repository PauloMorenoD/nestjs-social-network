import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/database/prisma.service";
import { plainToInstance } from "class-transformer";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { User } from "../entities/user.entity";
import { UserRepository } from "../repositories/users.repository";


@Injectable()
export class UserPrismaRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateUserDto): Promise<User> {


        const newUser = await this.prisma.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
                bio: data.bio
            }
        })

        return plainToInstance(User, newUser)
    }
    async update(id: number, data: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id },
            data: { ...data }
        })

        return plainToInstance(User, user)
    }

    async delete(id: number): Promise<void> {

        await this.prisma.user.delete({
            where: { id }
        })


    }

    async findUserByEmail(email: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { email }
        })

        return user
    }


    async findAll(): Promise<User[]> {

        const users = await this.prisma.user.findMany()

        return plainToInstance(User, users)
    }

    async findUser(id: number): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { id }
        })

        return plainToInstance(User, user)
    }


}