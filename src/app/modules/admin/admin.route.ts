import { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router();

router.post("/suspend/:id", adminController.suspendUser);

router.post("/add-category", adminController.addNewCategory);

const adminRoutes = router;
export default adminRoutes;
