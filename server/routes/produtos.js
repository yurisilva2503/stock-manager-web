import express from "express";
import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/produto.js";
const router = express.Router();

router.get("/products", getProducts);
router.post("/products", addProducts);
router.put("/products/update/:id", updateProducts);
router.delete("/products/delete/:id", deleteProducts);

export default router;