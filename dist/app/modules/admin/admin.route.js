"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const admin_validation_1 = require("./admin.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.post("/update-user-status/:id", (0, auth_1.default)(client_1.Role.ADMIN), (0, validateRequest_1.default)(admin_validation_1.adminValidations.updateUserStatusSchema), admin_controller_1.adminController.updateUserStatus);
router.post("/add-category", admin_controller_1.adminController.addNewCategory);
router.get("/categories", admin_controller_1.adminController.getAllCategories);
router.delete("/delete-category/:id", admin_controller_1.adminController.deleteCategory);
router.patch("/update-category/:id", admin_controller_1.adminController.updateCategory);
const adminRoutes = router;
exports.default = adminRoutes;
