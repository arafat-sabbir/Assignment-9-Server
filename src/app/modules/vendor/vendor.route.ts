import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { vendorValidations } from "./vendor.validation";
import { vendorController } from "./vendor.controller";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";
import { upload, uploadImage } from "../../utils/uploadImage";

const router = Router();

router.post(
  "/add-shop",
  upload.single("shopLogo"),
  uploadImage,
  AuthorizeRequest(Role.VENDOR),
  // validateRequest(vendorValidations.createVendorSchema),
  vendorController.createNewShop
);

router.get(
  "/shops",
  AuthorizeRequest(Role.VENDOR),
  vendorController.getAllMyShop
);

router.delete(
  "/delete-shop/:id",
  AuthorizeRequest(Role.VENDOR),
  vendorController.deleteMyShop
);

const vendorRoutes = router;

export default vendorRoutes;
