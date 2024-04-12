import { Router } from "express";

const router = Router();

router.get("/shopping-products", (req, res) => {
    res.status(200).send("WELCOME TO SHOP")
})

export default router;