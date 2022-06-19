import {ObjectType, Field, Int} from '@nestjs/graphql';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Cat} from "../../cats/entities/cat.entity";

@Entity()
@ObjectType()
export class Owner {
    @PrimaryGeneratedColumn()
    @Field(() => Int)
    id: number

    @Column()
    @Field()
    name: string

    @OneToMany(() => Cat, (cat) => cat.owner)
    @Field(() => [Cat], {nullable:true})
    cats?:Cat[]

}
