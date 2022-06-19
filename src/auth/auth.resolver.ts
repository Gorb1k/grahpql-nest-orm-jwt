import {Args, Context, Mutation, Resolver} from '@nestjs/graphql';
import {AuthService} from "./auth.service";
import {LoginResponse} from "./dto/login-response";

import {UseGuards} from "@nestjs/common";
import {GqlAuthGuard} from "./guards/gql-auth.guard";
import {User} from "../users/entities/user.entity";
import {LoginUserInput} from "./dto/login-user.input";

@Resolver()
export class AuthResolver {

    constructor(private authService:AuthService) {
    }

    @Mutation(() => LoginResponse)
    @UseGuards(GqlAuthGuard)
    login(@Args('loginUserInput') loginUserInput: LoginUserInput, @Context() context ) {
        return this.authService.login(context.user)
    }

    @Mutation(() => User)
    register(@Args('loginUserInput') loginUserInput: LoginUserInput) {
        return this.authService.register(loginUserInput)
    }

}
