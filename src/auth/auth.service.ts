import {BadRequestException, Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {User} from "../users/entities/user.entity";
import {JwtService} from "@nestjs/jwt";
import {LoginUserInput} from "./dto/login-user.input";
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
                private jwtService: JwtService) {
    }

    async validateUser(username:string, password:string) {
        const user = await this.usersService.findOne(username)

        const valid = await bcrypt.compare(password, user?.password)

        if (user && valid) {
            const {password, ...result} = user
            return result
        }
        return null
    }
    async login(user: User) {
        return {
            access_token: this.jwtService.sign({username: user.username, sub: user.id}),
            user
        }
    }

    async register(loginUserInput: LoginUserInput) {
        const user = await this.usersService.findOne(loginUserInput.username)
        if (user) {
            throw new BadRequestException('User already exists')
        }
        const password = await bcrypt.hash(loginUserInput.password, 10)
        return this.usersService.create({...loginUserInput, password})
    }
}
