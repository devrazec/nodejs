import { UserRepository } from "../repositories/user.repository.js";

const repo = new UserRepository();
let io; // Socket.IO instance

// Inject Socket.IO from server
export const setSocketIO = (socketInstance) => {
  io = socketInstance;
};

export class UserService {
  constructor() {
    this.lastUserId = 0;       // Track newest user ID
    this.pollingInterval = 3000; // Poll every 3 seconds
  }

  async listUsers() {
    const users = await repo.findAll();
    if (users.length) {
      this.lastUserId = Math.max(...users.map(u => u.id));
    }
    return users;
  }

  async createUser(data) {
    if (!data.name || !data.email) {
      throw new Error("Name and email are required");
    }

    const user = await repo.create(data);

    // Emit immediately to connected clients
    io?.emit("userCreated", user);

    // Update lastUserId
    if (user.id > this.lastUserId) this.lastUserId = user.id;

    return user;
  }

  async getUser(id) {
    const user = await repo.findById(parseInt(id));
    if (!user) throw new Error("User not found");
    return user;
  }

  startPolling() {
    setInterval(async () => {
      const users = await repo.findAll();
      const newUsers = users.filter(u => u.id > this.lastUserId);

      if (newUsers.length) {
        this.lastUserId = Math.max(...newUsers.map(u => u.id));
        newUsers.forEach(u => io?.emit("userCreated", u));
      }
    }, this.pollingInterval);
  }
}
