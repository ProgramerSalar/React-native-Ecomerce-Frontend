import express from "express";
import {
  createOrder,
  getAdminOrders,
  getMYOrders,
  getOrderDetails,
  processOrder,
} from "../controllers/order.js";
import { isAdmin, isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", isAuthenticated, createOrder);
router.get("/my", isAuthenticated, getMYOrders);
router
  .route("/single/:id")
  .get(isAuthenticated, getOrderDetails)
  .put(isAuthenticated, isAdmin, processOrder);

router.get("/admin", isAuthenticated, isAdmin, getAdminOrders)

export default router;
