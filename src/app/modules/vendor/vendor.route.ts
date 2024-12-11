import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { vendorValidations } from "./vendor.validation";
import { vendorController } from "./vendor.controller";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();

router.post(
  "/shop",
  AuthorizeRequest(Role.VENDOR),
  (req, res, next) => {
    req.body.user = req.user?.id;
    next();
  },
  validateRequest(vendorValidations.createVendorSchema),
  vendorController.createNewShop
);

const vendorRoutes = router;

export default vendorRoutes;
