import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  ingredients: string;

  @Field()
  instruction: string;

  @Field()
  image: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
