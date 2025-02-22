import express from "express";
import { getResponse } from "../controllers/ai.controller.js"; // ✅ Correct import

const router = express.Router();

router.post("/get-review", getResponse); // ✅ Ensure it is a valid callback

export default router;
