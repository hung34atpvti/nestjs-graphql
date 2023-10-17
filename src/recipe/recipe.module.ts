import { Module } from '@nestjs/common';
import { PrismaModule } from '../db/prisma/prisma.module';
import { RecipeService } from './recipe.service';

@Module({
  imports: [PrismaModule],
  providers: [RecipeService],
  exports: [RecipeService],
})
export class RecipeModule {}
