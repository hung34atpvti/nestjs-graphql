import { Injectable, Logger } from '@nestjs/common';
import { RecipeType } from '../graphql/types/recipe.type';
import { PrismaService } from '../db/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(RecipeService.name);

  async findAll(): Promise<RecipeType[]> {
    return this.prisma.recipe.findMany();
  }

  async findById(id: number): Promise<RecipeType> {
    return { id } as RecipeType;
  }

  async create(recipeData: Partial<RecipeType>): Promise<RecipeType> {
    return recipeData as RecipeType;
  }

  async update(
    id: number,
    recipeData: Partial<RecipeType>,
  ): Promise<RecipeType> {
    return { id, ...recipeData } as RecipeType;
  }

  async hardDelete(id: number): Promise<void> {
    this.logger.log(`deletedId: ${id}`);
    return;
  }
}
