import { Module } from '@nestjs/common';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipeModule } from '../recipe/recipe.module';

@Module({
  imports: [RecipeModule],
  providers: [RecipeResolver],
})
export class GraphqlModule {}
