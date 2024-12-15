"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const category_service_1 = require("./category.service");
const getAllCategories = (0, catchAsync_1.default)(async (req, res) => {
    const result = await category_service_1.categoryServices.getAllCategories();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "All Category Retrieved Successfully",
        statusCode: 200,
    });
});
exports.categoryControllers = { getAllCategories };
