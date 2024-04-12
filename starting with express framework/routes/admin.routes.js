import { Router } from "express";

const router = Router();

router.get("/show-admin", (req, res) => {
    res.status(200).send("WELCOME TO ADMIN")
})

export default router;