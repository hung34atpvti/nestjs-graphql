import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecipeInput {
  @Field()
  name: string;

  @Field()
  ingredients: string;

  @Field()
  instruction: string;

  image: string;
}
