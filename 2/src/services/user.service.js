import { UserRepository } from "../repositories/user.repository.js";

const repo = new UserRepository();

export class UserService {
  async listUsers() {
    return repo.findAll();
  }

  async createUser(data) {
    if (!data.name || !data.email) {
      throw new Error("Name and email are required");
    }
    return repo.create(data);
  }

  async getUser(id) {
    const user = await repo.findById(parseInt(id));
    if (!user) throw new Error("User not found");
    return user;
  }
}

