import { UserService } from "../services/user.service.js";

const service = new UserService();

export const UserController = {
  async getAll(req, res) {
    const users = await service.listUsers();
    res.json(users);
  },

  async create(req, res) {
    try {
      const user = await service.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async getOne(req, res) {
    try {
      const user = await service.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
};