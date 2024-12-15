"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const product_service_1 = require("./product.service");
const getAllProduct = (0, catchAsync_1.default)(async (req, res) => {
    const result = await product_service_1.productServices.getAllProduct();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "All Product Retrieved Successfully",
        statusCode: 200,
    });
});
exports.productControllers = { getAllProduct };
