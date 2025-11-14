export class UserRepository {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];

  async findAll() {
    return this.users;
  }

  async findById(id: number) {
    return this.users.find((u) => u.id === id) ?? null;
  }
}
