import { Router } from "express";
import { productControllers } from "./product.controller";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();

router.get("", productControllers.getAllProduct);

router.get(
  "/vendor",
  AuthorizeRequest(Role.VENDOR),
  productControllers.getAllProductForVendor
);

const productRoutes = router;

export default productRoutes;
