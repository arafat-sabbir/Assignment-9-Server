import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.route";
import adminRoutes from "../modules/admin/admin.route";
import vendorRoutes from "../modules/vendor/vendor.route";
import productRoutes from "../modules/product/product.route";

const router = Router();

const routes = [
  { path: "/auth", router: authRoutes },
  { path: "/users", router: userRoutes },
  { path: "/admin", router: adminRoutes },
  { path: "/vendor", router: vendorRoutes },
  { path: "/products", router: productRoutes },
];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
