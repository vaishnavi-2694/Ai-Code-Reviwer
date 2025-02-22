import express from "express";
import dotenv from "dotenv";
import aiRoutes from "./routes/ai.routes.js";
import cors from "cors"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Register routes
app.use("/ai", aiRoutes);

export default app;
