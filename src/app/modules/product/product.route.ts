import { Router } from "express";
import { productControllers } from "./product.controller";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";
import { upload, uploadImages } from "../../utils/uploadImage";

const router = Router();

router.get("", productControllers.getAllProduct);

router.get(
  "/vendor",
  AuthorizeRequest(Role.VENDOR),
  productControllers.getAllProductForVendor
);

router.post(
  "/add-product",
  upload.fields([{ name: "images", maxCount: 5 }]),
  uploadImages,
  AuthorizeRequest(Role.VENDOR),
  productControllers.addNewProduct
);

const productRoutes = router;

export default productRoutes;
