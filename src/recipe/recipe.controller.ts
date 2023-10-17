import { Controller, Get } from '@nestjs/common';
import { RecipeService } from './recipe.service';

@Controller('api/v1/recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}
  @Get()
  async findAll() {
    const recipes = await this.recipeService.findAll();
    return {
      message: 'OK',
      data: recipes,
    };
  }
}
