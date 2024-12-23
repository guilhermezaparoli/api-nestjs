import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 0,
        minUppercase: 0
    })
    password: string;
}

