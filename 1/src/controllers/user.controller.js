import { UserService } from '../services/user.service.js';
const service = new UserService();

export class UserController {
  static async list(req, res) {
    try {
      const users = await service.listUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async get(req, res) {
    try {
      const user = await service.getUser(Number(req.params.id));
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async create(req, res) {
    try {
      const newUser = await service.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const updated = await service.updateUser(Number(req.params.id), req.body);
      res.json(updated);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      const deleted = await service.deleteUser(Number(req.params.id));
      res.json(deleted);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}
