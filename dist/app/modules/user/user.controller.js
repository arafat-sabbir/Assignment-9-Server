"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const user_service_1 = require("./user.service");
const getAllUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.userServices.getAllUser();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "All User Retrieved Successfully",
        statusCode: 200,
    });
});
const getSingleUser = (0, catchAsync_1.default)(async (req, res) => {
    const result = await user_service_1.userServices.getSingleUser(req.params.id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Single User Retrieved Successfully",
        statusCode: 200,
    });
});
exports.userControllers = { getAllUser, getSingleUser };
