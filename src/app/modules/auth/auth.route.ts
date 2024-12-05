import { Router } from "express";
import { authControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { authValidations } from "./auth.validation";

const router = Router();

router.post(
  "/signup",
  validateRequest(authValidations.signUpUserSchema),
  authControllers.signUpUser
);
