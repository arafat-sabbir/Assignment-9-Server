import { Router } from "express";
import { userControllers } from "./user.controller";
import AuthorizeRequest from "../../middlewares/auth";
import { Role } from "@prisma/client";

const router = Router();

router.get("/", AuthorizeRequest(Role.ADMIN), userControllers.getAllUser);

router.get("/:id", AuthorizeRequest(Role.ADMIN), userControllers.getSingleUser);

export const userRoutes = router;
