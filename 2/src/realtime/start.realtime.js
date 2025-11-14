import { PrismaClient } from "@prisma/client";
import { UserController } from "../controllers/user.controller.js";

const prisma = new PrismaClient();
let lastSnapshot = [];

// Detect inserts, updates, deletes
function diffRows(oldRows, newRows) {
  const oldMap = new Map(oldRows.map(r => [r.id, r]));
  const changes = [];

  // Inserts & updates
  newRows.forEach(row => {
    const oldRow = oldMap.get(row.id);
    if (!oldRow) {
      changes.push({ type: "insert", row });
    } else if (JSON.stringify(oldRow) !== JSON.stringify(row)) {
      changes.push({ type: "update", row });
    }
  });

  // Deletes
  oldRows.forEach(row => {
    if (!newRows.find(r => r.id === row.id)) {
      changes.push({ type: "delete", row });
    }
  });

  return changes;
}

export async function startRealtime(interval = 3000) {
  console.log("🔌 Realtime SQLite listener started…");

  async function poll() {
    try {
      const currentRows = await prisma.user.findMany();
      const changes = diffRows(lastSnapshot, currentRows);

      changes.forEach(change => {
        console.log("🔄 DB Change:", { table: "User", ...change });
        // Broadcast to SSE clients (safe)
        UserController.broadcastChange({ table: "User", ...change });
      });

      lastSnapshot = currentRows;
    } catch (err) {
      console.error("❌ Error polling DB:", err);
    }

    setTimeout(poll, interval);
  }

  poll();
}
