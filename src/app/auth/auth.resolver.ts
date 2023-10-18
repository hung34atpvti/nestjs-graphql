import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserType } from '../user/types/user.type';
import { AuthType } from './types/auth.type';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => AuthType)
  async login(
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ): Promise<AuthType> {
    return this.authService.signIn(email, password);
  }

  @Mutation(() => UserType)
  async register(
    @Args('name', { type: () => String }) name: string,
    @Args('email', { type: () => String }) email: string,
    @Args('password', { type: () => String }) password: string,
  ): Promise<UserType> {
    return this.authService.signUp(name, email, password);
  }
}
