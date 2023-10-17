import { Injectable, Logger } from '@nestjs/common';
import { Recipe } from './recipe.type';

@Injectable()
export class RecipesService {
  private readonly logger = new Logger(RecipesService.name);

  async findAll(): Promise<Recipe[]> {
    return [];
  }

  async findById(id: number): Promise<Recipe> {
    return { id } as Recipe;
  }

  async create(recipeData: Partial<Recipe>): Promise<Recipe> {
    return recipeData as Recipe;
  }

  async update(id: number, recipeData: Partial<Recipe>): Promise<Recipe> {
    return { id, ...recipeData } as Recipe;
  }

  async hardDelete(id: number): Promise<void> {
    this.logger.log(`deletedId: ${id}`);
    return;
  }
}
