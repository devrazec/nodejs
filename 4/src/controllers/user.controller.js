import { UserService } from "../services/user.service.js";

const service = new UserService();

export const UserController = {

  // GET /api/users
  async listUsers(req, res) {
    try {
      const users = await service.listUsers();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  // GET /api/users/:id
  async getUser(req, res) {
    try {
      const id = Number(req.params.id);
      const user = await service.getUser(id);
      return res.json(user);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  },

  // POST /api/users
  async createUser(req, res) {
    try {
      const created = await service.createUser(req.body);
      return res.status(201).json(created);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // PUT /api/users/:id
  async updateUser(req, res) {
    try {
      const id = Number(req.params.id);
      const updated = await service.updateUser(id, req.body);
      return res.json(updated);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  },

  // DELETE /api/users/:id
  async deleteUser(req, res) {
    try {
      const id = Number(req.params.id);
      await service.deleteUser(id);
      return res.json({ success: true });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
};
