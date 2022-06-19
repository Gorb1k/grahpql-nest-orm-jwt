import { ObjectType, Field, Int } from '@nestjs/graphql';
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Owner} from "../../owner/entities/owner.entity";


@Entity()
@ObjectType()
export class Cat {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id:number

  @Column()
  @Field()
  name:string

  @Column({nullable:true})
  @Field({nullable:true})
  type?:string

  @Column()
  @Field(() => Int)
  ownerId:number

  @ManyToOne(() => Owner, owner => owner.cats)
  @Field(() => Owner)
  owner: Owner
}
