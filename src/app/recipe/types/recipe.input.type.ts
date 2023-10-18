import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInputType {
  @Field()
  name: string;

  @Field()
  ingredients: string;

  @Field()
  instruction: string;

  image: string;
}
