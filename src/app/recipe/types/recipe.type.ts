import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Recipe } from '@prisma/client';

@ObjectType()
export class RecipeType implements Recipe {
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
