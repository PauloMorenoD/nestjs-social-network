import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {

  constructor(private usersRepository: UserRepository) { }

  async create(createUserDto: CreateUserDto) {

    const userByEmail = await this.usersRepository.findUserByEmail(createUserDto.email);

    if (userByEmail) throw new ConflictException("email already exists!")

    return await this.usersRepository.create(createUserDto)
  }



  async findAll() {
    return await this.usersRepository.findAll()
  }



  async findOne(id: number) {

    if (!id) throw new BadRequestException("id must have an id ")

    const findUser = await this.usersRepository.findUser(id)

    if (!findUser) throw new NotFoundException("user not found!")

    return await this.usersRepository.findUser(id)
  }



  async update(id: number, updateUserDto: UpdateUserDto) {

    if (!id) throw new BadRequestException("id must have an id ")
    if (updateUserDto.email) {

      const userByEmail = await this.usersRepository.findUserByEmail(updateUserDto.email);

      if (userByEmail) throw new ConflictException("email already exists!")
    }
    const findUser = await this.usersRepository.findUser(id)

    if (!findUser) throw new NotFoundException("user not found!")

    return await this.usersRepository.update(id, updateUserDto)
  }



  async remove(id: number) {

    if (!id) throw new BadRequestException("id must have an id ")

    const findUser = await this.usersRepository.findUser(id)

    if (!findUser) throw new NotFoundException("user not found!")

    return await this.usersRepository.delete(id)
  }
}
