import express from "express";
const router = express.Router();
import {
  login,
  logout,
  signup,
  allUsers,
} from "../controller/user.controller.js";
import secureRoute from "../middleware/secureRoute.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allUsers", secureRoute, allUsers);
export default router;
