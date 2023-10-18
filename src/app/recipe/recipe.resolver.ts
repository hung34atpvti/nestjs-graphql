import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RecipeType } from './types/recipe.type';
import { RecipeService } from './recipe.service';
import { UserInputError } from '@nestjs/apollo';
import { RecipeInputType } from './types/recipe.input.type';
import { Recipe } from '@prisma/client';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';

@Resolver()
@UseGuards(AuthGuard)
export class RecipeResolver {
  constructor(private readonly recipesService: RecipeService) {}

  @Query(() => [RecipeType])
  async getRecipes() {
    return this.recipesService.findAll();
  }

  @Query(() => RecipeType)
  async getRecipe(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<RecipeType> {
    const recipe = await this.recipesService.findById(id);
    if (!recipe) {
      throw new UserInputError('Recipe not found');
    }
    return recipe;
  }

  @Mutation(() => RecipeType)
  async createRecipe(
    @Args('recipeData') recipeData: RecipeInputType,
  ): Promise<RecipeType> {
    return this.recipesService.create(recipeData as Recipe);
  }

  @Mutation(() => RecipeType)
  async updateRecipe(
    @Args('id', { type: () => Int }) id: number,
    @Args('recipeData') recipeData: RecipeInputType,
  ): Promise<RecipeType> {
    return this.recipesService.update(id, recipeData as Recipe);
  }

  @Mutation(() => Boolean)
  async deleteRecipe(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.recipesService.hardDelete(id);
    return true;
  }
}
