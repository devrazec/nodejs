export class UserRepository {
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  async findAll() {
    return this.users;
  }

  async findById(id) {
    return this.users.find((u) => u.id === id) ?? null;
  }

  async create(user) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  async update(id, data) {
    const user = await this.findById(id);
    if (!user) return null;
    Object.assign(user, data);
    return user;
  }

  async delete(id) {
    const index = this.users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    return this.users.splice(index, 1)[0];
  }
}
