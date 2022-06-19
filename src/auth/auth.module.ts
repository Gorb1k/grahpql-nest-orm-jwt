import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import {UsersModule} from "../users/users.module";
import {LocalStrategy} from "./local.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: 'SECRET' //process.env.JWT_SECRET
  }), UsersModule, PassportModule],
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
