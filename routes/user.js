import express from "express";
import { getMyProfile, login, logout } from "../controllers/user.js";
import { signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()



router.post('/login',login)
router.post('/signup', signup)
router.get('/me', isAuthenticated, getMyProfile)
router.get('/logout',isAuthenticated, logout)



export default router;