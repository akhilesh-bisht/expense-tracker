import express from "express";
const router = express.Router();
import { login, signup, logout } from "../controller/userController.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
export default router;
