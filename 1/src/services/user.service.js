import { UserRepository } from '../repositories/user.repository.js';

export class UserService {
  repo = new UserRepository();

  async listUsers() {
    return await this.repo.findAll();
  }

  async getUser(id) {
    const user = await this.repo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }

  async createUser(data) {
    return await this.repo.create(data);
  }

  async updateUser(id, data) {
    const updated = await this.repo.update(id, data);
    if (!updated) throw new Error('User not found');
    return updated;
  }

  async deleteUser(id) {
    const deleted = await this.repo.delete(id);
    if (!deleted) throw new Error('User not found');
    return deleted;
  }
}
