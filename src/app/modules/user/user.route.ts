import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.get("/", userControllers.getAllUser);

router.get("/:id", userControllers.getSingleUser);

export const userRoutes = router;
