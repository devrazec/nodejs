import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class UserRepository {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(user) {
    return prisma.user.create({ data: user });
  }

  async findById(id) {
    return prisma.user.findUnique({ where: { id } });
  }
}
