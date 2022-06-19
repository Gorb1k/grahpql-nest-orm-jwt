import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatInput {
  @Field()
  name:string
  @Field({nullable:true})
  type?:string

  @Field(() => Int)
  ownerId:number
}
