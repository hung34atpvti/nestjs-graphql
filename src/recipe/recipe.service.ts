import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../db/prisma/prisma.service';
import { Recipe } from '@prisma/client';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(RecipeService.name);

  async findAll(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany();
  }

  async findById(id: number): Promise<Recipe> {
    return this.prisma.recipe.findFirst({ where: { id } });
  }

  async create(recipeData: Recipe): Promise<Recipe> {
    return this.prisma.recipe.create({
      data: recipeData,
    });
  }

  async update(id: number, recipeData: Recipe): Promise<Recipe> {
    return this.prisma.recipe.update({
      where: { id },
      data: recipeData,
    });
  }

  async hardDelete(id: number): Promise<void> {
    await this.prisma.recipe.delete({ where: { id } });
    this.logger.log(`deletedId: ${id}`);
    return;
  }
}
