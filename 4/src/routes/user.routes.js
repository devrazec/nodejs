import express from "express";
import { UserController } from "../controllers/user.controller.js";

const router = express.Router();

// GET /api/users/:id
router.get("/:id", UserController.getUser);

// GET /api/users
router.get("/", UserController.listUsers);

// POST /api/users
router.post("/", UserController.createUser);

// PUT /api/users/:id
router.put("/:id", UserController.updateUser);

// DELETE /api/users/:id
router.delete("/:id", UserController.deleteUser);

export default router;
