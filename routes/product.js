import express from "express";

import { getProductDetails, getAllProducts, createProduct } from "../controllers/product.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.route("/single/:id").get(getProductDetails);
router.post("/new", isAuthenticated, singleUpload, createProduct)

export default router;
