import express from "express";

import {
  getProductDetails,
  getAllProducts,
  createProduct,
  updateProduct,
  addProductImage,
  deleteProductImage,
} from "../controllers/product.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.get("/all", getAllProducts);
router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, updateProduct);
router.post("/new", isAuthenticated, singleUpload, createProduct);

router
  .route("/images/:id")
  .post(isAuthenticated, singleUpload, addProductImage).delete(isAuthenticated, deleteProductImage)

export default router;
