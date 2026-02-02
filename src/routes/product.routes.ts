import { Router } from "express";
import controller from "../controllers/product.controller";

const router=Router();

router.post("/",controller.create);
router.get("/",controller.list);

export default router;
