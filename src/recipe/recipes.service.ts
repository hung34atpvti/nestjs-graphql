import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private recipesRepository: Repository<Recipe>,
  ) {}
  private readonly logger = new Logger(RecipesService.name);

  async findAll(): Promise<Recipe[]> {
    return this.recipesRepository.find();
  }

  async findById(id: number): Promise<Recipe> {
    return this.recipesRepository.findOneBy({ id });
  }

  async create(recipeData: Partial<Recipe>): Promise<Recipe> {
    const recipe = this.recipesRepository.create(recipeData);
    return this.recipesRepository.save(recipe);
  }

  async update(id: number, recipeData: Partial<Recipe>): Promise<Recipe> {
    const recipe = await this.findById(id);
    if (!recipe) {
      // Handle not found
      this.logger.log('Recipe not found');
      return null;
    }
    Object.assign(recipe, recipeData);
    return this.recipesRepository.save(recipe);
  }

  async hardDelete(id: number): Promise<void> {
    const recipe = await this.findById(id);
    if (!recipe) {
      // Handle not found
      this.logger.log('Recipe not found');
      return;
    }
    await this.recipesRepository.remove(recipe);
  }
}
