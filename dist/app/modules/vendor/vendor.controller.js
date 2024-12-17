"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const vendor_service_1 = require("./vendor.service");
const createNewShop = (0, catchAsync_1.default)(async (req, res) => {
    const result = await vendor_service_1.vendorServices.createNewShop({
        shopLogo: req.photo,
        user: req.user.id,
        ...req.body,
    });
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Shop Created Successfully",
        statusCode: 201,
    });
});
const getAllMyShop = (0, catchAsync_1.default)(async (req, res) => {
    const result = await vendor_service_1.vendorServices.getAllMyShop(req.user.id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Shops Retrieved Successfully",
        statusCode: 200,
    });
});
const deleteMyShop = (0, catchAsync_1.default)(async (req, res) => {
    const result = await vendor_service_1.vendorServices.deleteShop(req.user.id, req.params.id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Shop Deleted Successfully",
        statusCode: 200,
    });
});
exports.vendorController = { createNewShop, getAllMyShop, deleteMyShop };
