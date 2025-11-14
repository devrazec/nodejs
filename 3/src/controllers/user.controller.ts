import { UserService } from '../services/user.service.js';
import type { Request, Response } from 'express';
const service = new UserService();

export class UserController {
  static async list(req: Request, res: Response) {
    try {
      const users = await service.listUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  static async get(req: Request, res: Response) {
    try {
      const user = await service.getUser(Number(req.params.id));
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: (err as Error).message });
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const newUser = await service.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ error: (err as Error).message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const updated = await service.updateUser(Number(req.params.id), req.body);
      res.json(updated);
    } catch (err) {
      res.status(404).json({ error: (err as Error).message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const deleted = await service.deleteUser(Number(req.params.id));
      res.json(deleted);
    } catch (err) {
      res.status(404).json({ error: (err as Error).message });
    }
  }
}
