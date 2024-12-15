"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const admin_route_1 = __importDefault(require("../modules/admin/admin.route"));
const vendor_route_1 = __importDefault(require("../modules/vendor/vendor.route"));
const product_route_1 = __importDefault(require("../modules/product/product.route"));
const category_route_1 = __importDefault(require("../modules/category/category.route"));
const router = (0, express_1.Router)();
const routes = [
    { path: "/auth", router: auth_route_1.authRoutes },
    { path: "/users", router: user_route_1.userRoutes },
    { path: "/admin", router: admin_route_1.default },
    { path: "/vendor", router: vendor_route_1.default },
    { path: "/products", router: product_route_1.default },
    { path: "/categories", router: category_route_1.default },
];
routes.forEach((route) => router.use(route.path, route.router));
const allRoutes = router;
exports.default = allRoutes;
