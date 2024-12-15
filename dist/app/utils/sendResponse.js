"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, data) => {
    res.status(data?.statusCode || 200).json({
        success: true,
        status: data?.statusCode || 200,
        message: data.message,
        data: data.data,
    });
};
exports.default = sendResponse;
