"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// An instance of Error To Send Error With Various Status Code
class AppError extends Error {
    statusCode;
    constructor(statusCode, message, stack = " ") {
        super(message);
        this.statusCode = statusCode;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.default = AppError;
