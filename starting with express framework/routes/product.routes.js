import { Router } from "express";
import { getProducts, showAllProducts } from "../controllers/product.controller.js";

const router = Router();

router.get("/show-product", getProducts)


router.route("/add-product").post(
    showAllProducts
)

export default router;