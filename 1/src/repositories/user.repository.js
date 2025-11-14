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
}
