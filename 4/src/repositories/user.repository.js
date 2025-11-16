import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {

  async listUsers() {
    return prisma.user.findMany();
  }

  async getUser(id) {
    return prisma.user.findUnique({
      where: { id }
    });
  }

  async createUser(data) {
    return prisma.user.create({
      data
    });
  }

  async updateUser(id, data) {
    return prisma.user.update({
      where: { id },
      data
    });
  }

  async deleteUser(id) {
    return prisma.user.delete({
      where: { id }
    });
  }
}