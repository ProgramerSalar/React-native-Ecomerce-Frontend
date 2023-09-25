import express from "express";
import { getMyProfile, login } from "../controllers/user.js";
import { signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()



router.post('/login',login)
router.post('/signup', signup)
router.get('/me', isAuthenticated, getMyProfile)




export default router;