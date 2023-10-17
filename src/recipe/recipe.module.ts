import { Module } from '@nestjs/common';
import { PrismaModule } from '../db/prisma/prisma.module';
import { RecipeService } from './recipe.service';
import { RecipeController } from './recipe.controller';

@Module({
  imports: [PrismaModule],
  providers: [RecipeService],
  controllers: [RecipeController],
  exports: [RecipeService],
})
export class RecipeModule {}
