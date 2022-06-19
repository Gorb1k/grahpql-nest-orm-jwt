import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import {InjectRepository} from "@nestjs/typeorm";
import {Cat} from "./entities/cat.entity";
import {Repository} from "typeorm";
import {OwnerService} from "../owner/owner.service";
import {Owner} from "../owner/entities/owner.entity";

@Injectable()
export class CatsService {

  constructor(@InjectRepository(Cat) private catRepository:Repository<Cat>,
              private ownerService: OwnerService) {
  }

  create(createCatInput: CreateCatInput) {
    const cat = this.catRepository.create(createCatInput)
    return this.catRepository.save(cat)
  }

  findAll() {
    return this.catRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }
  getOwner(id:number):Promise<Owner> {
    return this.ownerService.findOne(id)
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
