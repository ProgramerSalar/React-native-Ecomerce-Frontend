import express from "express";

import {
  getProductDetails,
  getAllProducts,
  createProduct,
  updateProduct,
  addProductImage,
  deleteProductImage,
  deleteProduct,
  addCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/product.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

// product

router.get("/all", getAllProducts);
router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, updateProduct)
  .delete(isAuthenticated, deleteProduct);

router.post("/new", isAuthenticated, singleUpload, createProduct);

router
  .route("/images/:id")
  .post(isAuthenticated, singleUpload, addProductImage)
  .delete(isAuthenticated, deleteProductImage);

// category
router.post("/category", isAuthenticated, addCategory);
router.get("/categories", getAllCategories);
router.delete("/category/:id", isAuthenticated, deleteCategory);

export default router;
