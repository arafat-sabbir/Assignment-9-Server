import { Router } from "express";
import { categoryControllers } from "./category.controller";

const router = Router();

router.get("", categoryControllers.getAllCategories);

const categoryRoutes = router;

export default categoryRoutes;
