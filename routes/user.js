import express from "express";
import { login } from "../controllers/user.js";
import { signup } from "../controllers/user.js";

const router = express.Router()



router.post('/login',login)
router.post('/signup', signup)



export default router;