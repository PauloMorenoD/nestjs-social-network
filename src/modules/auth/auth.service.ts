import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){}

    async validator(email: string, password: string){
        const user = await this.userService.findByEmail(email)

        if(user) {
            const passwordComparison = await compare(password, user.password)

            if( passwordComparison) return {email: user.email}
        }
    }

    async login(email: string){
        const user = await this.userService.findByEmail(email)

        return {
            token : this.jwtService.sign({
                email
            },{
                subject : String(user.id)
            }),
            userId:user.id
        }
    }
}
