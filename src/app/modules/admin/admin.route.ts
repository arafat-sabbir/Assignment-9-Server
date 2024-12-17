import { Router } from "express";
import { adminController } from "./admin.controller";
import validateRequest from "../../middlewares/validateRequest";
import { adminValidations } from "./admin.validation";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();

router.post(
  "/update-user-status/:id",
  AuthorizeRequest(Role.ADMIN),
  validateRequest(adminValidations.updateUserStatusSchema),
  adminController.updateUserStatus
);

router.post("/add-category", adminController.addNewCategory);

router.get("/categories", adminController.getAllCategories);

router.delete("/delete-category/:id", adminController.deleteCategory);

router.patch("/update-category/:id", adminController.updateCategory);

const adminRoutes = router;
export default adminRoutes;
