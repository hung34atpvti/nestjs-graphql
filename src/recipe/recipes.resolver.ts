import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Recipe } from './recipe.entity';
import { RecipesService } from './recipes.service';
import { UserInputError } from '@nestjs/apollo';
import { RecipeInput } from './recipe.input';

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(() => [Recipe])
  async getRecipes() {
    return this.recipesService.findAll();
  }

  @Query(() => Recipe)
  async getRecipe(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<Recipe> {
    const recipe = await this.recipesService.findById(id);
    if (!recipe) {
      throw new UserInputError('Recipe not found');
    }
    return recipe;
  }

  @Mutation(() => Recipe)
  async createRecipe(
    @Args('recipeData') recipeData: RecipeInput,
  ): Promise<Recipe> {
    return this.recipesService.create(recipeData);
  }

  @Mutation(() => Recipe)
  async updateRecipe(
    @Args('id', { type: () => Int }) id: number,
    @Args('recipeData') recipeData: RecipeInput,
  ): Promise<Recipe> {
    return this.recipesService.update(id, recipeData);
  }

  @Mutation(() => Boolean)
  async deleteRecipe(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.recipesService.hardDelete(id);
    return true;
  }
}
