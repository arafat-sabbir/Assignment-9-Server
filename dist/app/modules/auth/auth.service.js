"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const client_1 = require("@prisma/client");
const app_1 = require("../../../app");
const hashInfo_1 = __importDefault(require("../../utils/hashInfo"));
const appError_1 = __importDefault(require("../../errors/appError"));
const generateToken_1 = __importDefault(require("../../utils/generateToken"));
const compareInfo_1 = __importDefault(require("../../utils/compareInfo"));
const signUpUser = async (payload) => {
    const userExists = await app_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (userExists) {
        throw new Error("User Already Exists");
    }
    const { password, ...rest } = payload;
    const hashedPassword = await (0, hashInfo_1.default)(password, 12);
    const user = await app_1.prisma.user.create({
        data: {
            ...rest,
            password: hashedPassword,
        },
    });
    return user;
};
const signInUser = async (payload) => {
    const user = await app_1.prisma.user.findUnique({
        where: { email: payload.email },
    });
    if (user?.status === client_1.Status.SUSPENDED) {
        throw new Error("Your Account Is Suspended Contact Support");
    }
    if (!user || user.status === client_1.Status.DELETED) {
        throw new appError_1.default(404, "Account Not Found Try Again");
    }
    else {
        const isPasswordMatch = await (0, compareInfo_1.default)(payload.password, user?.password);
        if (!isPasswordMatch) {
            throw new appError_1.default(400, "Password Does Not Match Try Again");
        }
        const accessToken = (0, generateToken_1.default)(user.email, user.id, user.role, user?.name);
        return { accessToken };
    }
};
exports.authServices = { signUpUser, signInUser };
