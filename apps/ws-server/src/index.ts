import { WebSocketServer } from "ws";

import { client } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (ws) => {
  console.log("Client connected");
  await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  ws.send("Hello there you are connected to the ws server");
});
