import { hashSync } from "bcrypt"
import { Transform } from "class-transformer"
import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name : string
    
    @IsEmail()
    @IsNotEmpty()
    email : string
    
    @IsString()
    @IsNotEmpty()
    @Transform(({value} : {value:string}) => hashSync(value, 10),{
        groups:['transform']
    })
    password : string
    
    @IsString()
    @IsNotEmpty()
    bio : string

}
