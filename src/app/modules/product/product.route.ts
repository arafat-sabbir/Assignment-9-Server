import { Router } from "express";
import { productControllers } from "./product.controller";

const router = Router();

router.get("", productControllers.getAllProduct);

const productRoutes = router;

export default productRoutes;
