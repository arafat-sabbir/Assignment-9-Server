import { Router } from "express";
import { authRoutes } from "../modules/auth/auth.route";

const router = Router();

const routes = [{ path: "/auth", router: authRoutes }];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
