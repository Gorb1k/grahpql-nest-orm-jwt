import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Cat} from "./entities/cat.entity";
import {OwnerModule} from "../owner/owner.module";

@Module({
  imports: [TypeOrmModule.forFeature([Cat]), OwnerModule],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
