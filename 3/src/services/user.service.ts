import { UserRepository } from '../repositories/user.repository.js';
import type { User } from '../repositories/user.repository.js';

export class UserService {
  private repo = new UserRepository();

  async listUsers() {
    return await this.repo.findAll();
  }

  async getUser(id: number) {
    const user = await this.repo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  async createUser(data: User) {
    return await this.repo.create(data);
  }

  async updateUser(id: number, data: Partial<User>) {
    const updated = await this.repo.update(id, data);
    if (!updated) throw new Error('User not found');
    return updated;
  }

  async deleteUser(id: number) {
    const deleted = await this.repo.delete(id);
    if (!deleted) throw new Error('User not found');
    return deleted;
  }
}
