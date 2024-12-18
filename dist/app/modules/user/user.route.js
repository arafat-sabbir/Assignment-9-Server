"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.get("/", (0, auth_1.default)(client_1.Role.ADMIN), user_controller_1.userControllers.getAllUser);
router.get("/:id", (0, auth_1.default)(client_1.Role.ADMIN), user_controller_1.userControllers.getSingleUser);
exports.userRoutes = router;
