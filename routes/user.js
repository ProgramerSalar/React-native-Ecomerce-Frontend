import express from "express";
import { changePassword, getMyProfile, login, logout, updateProfile } from "../controllers/user.js";
import { signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router()



router.post('/login',login)
router.post('/signup', signup)
router.get('/me', isAuthenticated, getMyProfile)
router.get('/logout',isAuthenticated, logout)



// update Routes 
router.put("/updateprofile",isAuthenticated, updateProfile)
router.put("/changepassword",isAuthenticated, changePassword)

export default router;