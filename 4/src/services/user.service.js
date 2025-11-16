import { UserRepository } from "../repositories/user.repository.js";

const repo = new UserRepository();
let io = null; // Socket.IO instance

export const setSocketIO = (socketInstance) => {
  io = socketInstance;
};

export class UserService {

  constructor() {
    this.lastUserId = 0;
    this.pollingInterval = 3000;
  }

  // GET /api/users
  async listUsers() {
    const users = await repo.listUsers();

    if (users.length) {
      this.lastUserId = Math.max(...users.map(u => u.id));
    }

    return users;
  }

    // GET /api/users/:id
  async getUser(id) {
    id = Number(id);

    const user = await repo.getUser(id);
    if (!user) throw new Error("User not found");

    return user;
  }

  // POST /api/users
  async createUser(data) {
    this.#validateUserData(data);

    const newUser = await repo.createUser(data);

    // Real-time event
    if (io) io.emit("userCreated", newUser);

    if (newUser.id > this.lastUserId) {
      this.lastUserId = newUser.id;
    }

    return newUser;
  }

  // PUT /api/users/:id
  async updateUser(id, data) {
    id = Number(id);

    if (!id) throw new Error("Invalid user id");
    this.#validateUserData(data);

    const updated = await repo.updateUser(id, data);

    if (!updated) throw new Error("User not found");

    if (io) io.emit("userUpdated", updated);

    return updated;
  }

  // DELETE /api/users/:id
  async deleteUser(id) {
    id = Number(id);

    const deleted = await repo.deleteUser(id);

    if (!deleted) throw new Error("User not found");

    if (io) io.emit("userDeleted", { id });

    return deleted;
  }

  // Internal validation helper
  #validateUserData(data) {
    if (!data.firstname || !data.lastname || !data.phone || !data.email) {
      throw new Error("firstname, lastname, phone, and email are required");
    }
  }

  // Polling to detect externally created users
  startPolling() {
    setInterval(async () => {
      const users = await repo.listUsers();
      const newUsers = users.filter(u => u.id > this.lastUserId);

      if (newUsers.length) {
        this.lastUserId = Math.max(...newUsers.map(u => u.id));

        newUsers.forEach(user => {
          if (io) io.emit("userCreated", user);
        });
      }
    }, this.pollingInterval);
  }
}
