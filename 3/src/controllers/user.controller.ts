import type { Request, Response } from 'express';
import { UserService } from '../services/user.service.js';

const service = new UserService();

export class UserController {
  static async list(req: Request, res: Response) {
    const users = await service.listUsers();
    res.json(users);
  }

  static async get(req: Request, res: Response) {
    try {
      const user = await service.getUser(Number(req.params.id));
      res.json(user);
    } catch (err) {
      console.error(err);
      res.status(404).json({ error: 'User not found' });
    }
  }
}
