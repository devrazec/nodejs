import { UserService } from "../services/user.service.js";

const service = new UserService();

// SSE clients (responses)
let clients = [];

export const UserController = {
  async getAll(req, res) {
    const users = await service.listUsers();
    res.json(users);
  },

  async create(req, res) {
    try {
      const user = await service.createUser(req.body);
      res.status(201).json(user);

      // Notify SSE subscribers
      UserController.broadcastChange({ table: "User", type: "insert", row: user });
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
  },

  // SSE subscribe endpoint — NOT async, must keep res open
  subscribe(req, res) {
    // Required SSE headers
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    // Some proxies/browsers benefit from flushing headers
    if (typeof res.flushHeaders === "function") res.flushHeaders();

    // Send a comment to establish the stream and keep it alive
    res.write(": connected\n\n");

    // Enable TCP keepalive on the socket
    if (req.socket && typeof req.socket.setKeepAlive === "function") {
      req.socket.setKeepAlive(true);
    }

    // Save client response
    clients.push(res);

    // Remove client on close
    req.on("close", () => {
      clients = clients.filter(c => c !== res);
    });
  },

  // Broadcast change to all connected clients
  broadcastChange(change) {
    clients.forEach((client) => {
      try {
        client.write(`data: ${JSON.stringify(change)}\n\n`);
      } catch (err) {
        // Remove client if writing fails
        clients = clients.filter(c => c !== client);
      }
    });
  }
};
