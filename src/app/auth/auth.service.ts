import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, passwordInPlaintext: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    const isPasswordMatching = await bcrypt.compare(
      passwordInPlaintext,
      user.password,
    );
    if (!isPasswordMatching) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.email };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    name: string,
    email: string,
    passwordInPlaintext: string,
  ): Promise<any> {
    const hashedPassword = await bcrypt.hash(passwordInPlaintext, 10);
    const user = await this.usersService.create(name, email, hashedPassword);
    const result = Object.assign({}, user);
    delete result['password'];
    return result;
  }
}
