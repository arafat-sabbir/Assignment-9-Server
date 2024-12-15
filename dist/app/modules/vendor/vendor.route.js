"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const vendor_validation_1 = require("./vendor.validation");
const vendor_controller_1 = require("./vendor.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const router = (0, express_1.Router)();
router.post("/shop", (0, auth_1.default)(client_1.Role.VENDOR), (req, res, next) => {
    req.body.user = req.user?.id;
    next();
}, (0, validateRequest_1.default)(vendor_validation_1.vendorValidations.createVendorSchema), vendor_controller_1.vendorController.createNewShop);
const vendorRoutes = router;
exports.default = vendorRoutes;
