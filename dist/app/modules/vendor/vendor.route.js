"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_controller_1 = require("./vendor.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const client_1 = require("@prisma/client");
const uploadImage_1 = require("../../utils/uploadImage");
const router = (0, express_1.Router)();
router.post("/add-shop", uploadImage_1.upload.single("shopLogo"), uploadImage_1.uploadImage, (0, auth_1.default)(client_1.Role.VENDOR), 
// validateRequest(vendorValidations.createVendorSchema),
vendor_controller_1.vendorController.createNewShop);
router.get("/shops", (0, auth_1.default)(client_1.Role.VENDOR), vendor_controller_1.vendorController.getAllMyShop);
router.delete("/delete-shop/:id", (0, auth_1.default)(client_1.Role.VENDOR), vendor_controller_1.vendorController.deleteMyShop);
const vendorRoutes = router;
exports.default = vendorRoutes;
