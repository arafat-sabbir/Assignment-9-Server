import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";
import { userRoutes } from "../modules/user/user.route";
import adminRoutes from "../modules/admin/admin.route";

const router = Router();

const routes = [
  { path: "/auth", router: authRoutes },
  { path: "/users", router: userRoutes },
  { path: "/admin", router: adminRoutes },
];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
