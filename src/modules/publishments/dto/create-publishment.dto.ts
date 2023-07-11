import { IsNotEmpty, IsString } from "class-validator"

export class CreatePublishmentDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    description: string

}
