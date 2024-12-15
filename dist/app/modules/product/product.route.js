"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const router = (0, express_1.Router)();
router.get("", product_controller_1.productControllers.getAllProduct);
const productRoutes = router;
exports.default = productRoutes;
