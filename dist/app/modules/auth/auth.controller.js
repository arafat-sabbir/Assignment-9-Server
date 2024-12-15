"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authControllers = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const auth_service_1 = require("./auth.service");
const signUpUser = (0, catchAsync_1.default)(async (req, res, next) => {
    console.log(req.body, 'body');
    const result = await auth_service_1.authServices.signUpUser(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "SignUp Successful",
        statusCode: 201,
    });
});
const signInUser = (0, catchAsync_1.default)(async (req, res, next) => {
    const result = await auth_service_1.authServices.signInUser(req.body);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "SignIn Successful",
        statusCode: 200,
    });
});
exports.authControllers = { signUpUser, signInUser };
