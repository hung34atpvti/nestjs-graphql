import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../db/prisma/prisma.service';
import { User } from '@prisma/client';

// This should be a real class/interface representing a user entity

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async findOne(email: string): Promise<User | undefined> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(
    name: string,
    email: string,
    hashedPassword: string,
  ): Promise<User> {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}
