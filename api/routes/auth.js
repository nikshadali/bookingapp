import express from "express";
import { register } from "../controlls/AuthControll.js";
const router = express.Router();

router.post("/register", register);

export default router;
