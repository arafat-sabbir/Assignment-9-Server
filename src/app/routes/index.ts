import { Router } from "express";

const router = Router();

const routes = [

];

routes.forEach((route) => router.use(route.path, route.router));

const allRoutes = router;

export default allRoutes;
