import express from "express";
import { getMyProfile } from "../controllers/user.js";


const router = express.Router()


// http://localhost:5000/api/v1/user/me
router.route('/me').get(getMyProfile)



export default router;