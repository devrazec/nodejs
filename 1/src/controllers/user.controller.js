import { UserService } from '../services/user.service.js';

const service = new UserService();

export class UserController {
  static async list(req, res) {
    const users = await service.listUsers();
    res.json(users);
  }

  static async get(req, res) {
    try {
      const user = await service.getUser(Number(req.params.id));
      res.json(user);
    } catch {
      res.status(404).json({ error: 'User not found' });
    }
  }
}
