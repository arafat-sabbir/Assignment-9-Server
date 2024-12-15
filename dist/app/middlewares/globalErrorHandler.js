"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const client_1 = require("@prisma/client");
const config_1 = __importDefault(require("../config"));
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const appError_1 = __importDefault(require("../errors/appError"));
/**
 * Global error handler for Express.js applications using Prisma.
 * Handles errors that occur during the request-response cycle.
 *
 * @param {Error} error - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function.
 * @return {Response} The JSON response containing the error message and status code.
 */
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let stack = null;
    let message = "Something Went Wrong";
    let errorSources = [
        {
            path: " ",
            message: "Something Went Wrong",
        },
    ];
    if (error instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(error);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources =
            config_1.default.node_env === "development"
                ? simplifiedError?.errorSources
                : [];
        stack = config_1.default.node_env === "development" && error.stack;
    }
    else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        // Handle known Prisma errors like unique constraint violations
        if (error.code === "P2002") {
            statusCode = 400;
            message = "Unique constraint failed";
            errorSources =
                config_1.default.node_env === "development"
                    ? [
                        {
                            path: error.meta?.target
                                ? error.meta.target.toString()
                                : "unknown",
                            message: "A record with this value already exists.",
                        },
                    ]
                    : [];
        }
        // Handle record not found scenario
        if (error.code === "P2025") {
            statusCode = 404;
            message = error?.message;
            errorSources =
                config_1.default.node_env === "development"
                    ? [
                        {
                            path: " ",
                            message: error?.message,
                        },
                    ]
                    : [];
        }
        stack = config_1.default.node_env === "development" && error.stack;
    }
    else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
        statusCode = 400;
        message = extractMeaningfulMessage(error.message);
        errorSources =
            config_1.default.node_env === "development"
                ? [
                    {
                        path: " ",
                        message: extractMeaningfulMessage(error.message),
                    },
                ]
                : [];
        stack = config_1.default.node_env === "development" && error.stack;
    }
    else if (error instanceof client_1.Prisma.PrismaClientUnknownRequestError) {
        statusCode = 500;
        message = "Unknown Database Error";
        errorSources =
            config_1.default.node_env === "development"
                ? [
                    {
                        path: " ",
                        message: error.message,
                    },
                ]
                : [];
        stack = config_1.default.node_env === "development" && error.stack;
    }
    else if (error instanceof appError_1.default) {
        statusCode = error?.statusCode;
        message = error?.message;
        errorSources =
            config_1.default.node_env === "development"
                ? [
                    {
                        path: " ",
                        message: error.message,
                    },
                ]
                : [];
        stack = config_1.default.node_env === "development" && error.stack;
    }
    else if (error instanceof Error) {
        message = error?.message;
        errorSources =
            config_1.default.node_env === "development"
                ? [
                    {
                        path: " ",
                        message: error.message,
                    },
                ]
                : [];
        stack = config_1.default.node_env === "development" && error.stack;
    }
    res.status(statusCode).json({
        statusCode,
        success: false,
        message,
        ...(errorSources?.length ? { errorSources } : {}),
        ...(stack ? { stack } : {}),
    });
};
exports.default = globalErrorHandler;
/**
 * Extract meaningful error message from Prisma validation error.
 * @param {string} fullMessage - Full error message from Prisma.
 * @returns {string} Simplified error message.
 */
const extractMeaningfulMessage = (fullMessage) => {
    const match = fullMessage.match(/Argument `(.+?)` is missing/);
    return match ? `The '${match[1]}' field is required.` : "Invalid input.";
};
