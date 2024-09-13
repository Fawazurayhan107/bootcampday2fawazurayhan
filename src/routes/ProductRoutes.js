import express from "express";
import { 
    getProducts, 
    addProduct, 
    getProductDetail, 
    deleteProduct, 
    updateProduct 
} from "../controller/productController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/", authMiddleware, getProducts);
router.get("/:id", authMiddleware, getProductDetail);
router.post("/", authMiddleware, addProduct);
router.put("/:id", authMiddleware, updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

export default router;