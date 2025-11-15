import express from 'express';
import userRoutes from './routes/user.routes.js';

import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// Serve static files from public
app.use(express.static(path.join(__dirname, "../public")));

// Redirect root `/` to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.use('/users', userRoutes);

export default app;