import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
  }

  create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput)
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(username:string) {
    return this.userRepository.findOne({where: {username}});
  }

}
