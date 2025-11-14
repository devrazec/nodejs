import { UserRepository } from '../repositories/user.repository.js';

export class UserService {
  private repo = new UserRepository();

  async listUsers() {
    return this.repo.findAll();
  }

  async getUser(id: number) {
    const user = await this.repo.findById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
