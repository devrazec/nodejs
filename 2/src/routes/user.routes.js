import express from "express";
import { UserController } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", UserController.getAll);
router.post("/", UserController.create);
router.get("/:id", UserController.getOne);

// SSE endpoint for realtime updates
router.get("/subscribe", UserController.subscribe);

export default router;
