import { Module } from '@nestjs/common';
import { PrismaModule } from '../../db/prisma/prisma.module';
import { RecipeService } from './recipe.service';
import { RecipeResolver } from './recipe.resolver';

@Module({
  imports: [PrismaModule],
  providers: [RecipeService, RecipeResolver],
  exports: [RecipeService],
})
export class RecipeModule {}
