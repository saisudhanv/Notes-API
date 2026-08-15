import express from "express";
import { getSample } from "../controllers/noteController.js";

const router = express.Router();

router.get("/", getSample);

export default router;
