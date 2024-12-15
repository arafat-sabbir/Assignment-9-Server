"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const app_1 = require("../../../app");
const getAllProduct = async () => {
    return app_1.prisma.product.findMany({});
};
exports.productServices = { getAllProduct };
