import { Exclude } from "class-transformer"

export class User {
    readonly id : number
    name : string
    email : string
    createdAt : Date
    @Exclude()
    password : string
}
