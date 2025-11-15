import http from "http";
import { Server as SocketIO } from "socket.io";
import app from "./app.js";
import { setSocketIO, UserService } from "./services/user.service.js";

const PORT = 3000;
const httpServer = http.createServer(app);
const io = new SocketIO(httpServer, { cors: { origin: "*" } });

// Inject Socket.IO into service
setSocketIO(io);

const userService = new UserService();
userService.startPolling(); // start polling for new users

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});

httpServer.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
