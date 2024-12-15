"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryServices = void 0;
const app_1 = require("../../../app");
const getAllCategories = async () => {
    return app_1.prisma.category.findMany({});
};
exports.categoryServices = { getAllCategories };
