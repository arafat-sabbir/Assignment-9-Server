"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const router = (0, express_1.Router)();
router.post("/suspend/:id", admin_controller_1.adminController.suspendUser);
router.post("/add-category", admin_controller_1.adminController.addNewCategory);
const adminRoutes = router;
exports.default = adminRoutes;
