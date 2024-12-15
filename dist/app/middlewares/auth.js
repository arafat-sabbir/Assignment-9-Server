"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appError_1 = __importDefault(require("../errors/appError"));
const app_1 = require("../../app");
const config_1 = __importDefault(require("../config"));
/**
 * Middleware to authorize requests.
 * Checks if the request has a valid authorization token.
 * If not, it throws an unauthorized error.
 */
const AuthorizeRequest = (...roles) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        // Get the authorization token from the request headers
        const token = req.headers.authorization?.split(" ")[1];
        // If no token is provided, throw an unauthorized error
        if (!token) {
            throw new appError_1.default(401, "Unauthorized Access");
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
            req.user = decoded;
            const { id } = decoded;
            if (roles.length > 0 && !roles.includes(decoded?.role)) {
                throw new appError_1.default(401, "Unauthorized Access");
            }
            const admin = await app_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (!admin) {
                console.log("admin not found");
                throw new Error("User not found");
            }
        }
        catch (error) {
            console.log(error, "", "ërror");
            throw new appError_1.default(401, "Unauthorized Access3");
        }
        next();
    });
};
exports.default = AuthorizeRequest;
