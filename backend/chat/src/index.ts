import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import dns from "dns";
import chatRoutes from "./routes/chat.js";
import cors from "cors";
import { app, server } from "./config/socket.js";

// Use public DNS servers
dns.setServers(["1.1.1.1", "8.8.8.8"]);

dotenv.config();

connectDb();

app.use(express.json());

app.use(cors());

app.use("/api/v1", chatRoutes);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
