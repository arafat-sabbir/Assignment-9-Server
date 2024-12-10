import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { vendorValidations } from "./vendor.validation";
import { vendorController } from "./vendor.controller";

const router = Router();

router.post(
  "/shop",
  validateRequest(vendorValidations.createVendorSchema),
  vendorController.createNewShop
);

const vendorRoutes = router;

export default vendorRoutes;
