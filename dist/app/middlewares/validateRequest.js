"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const validateRequest = (schema, strictCheck = false) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        // Conditionally apply strict validation
        const finalSchema = strictCheck ? schema.strict() : schema;
        // Parse the request body using the final schema.
        await finalSchema.parseAsync({ body: req.body });
        // Continue to the next middleware.
        next();
    });
};
exports.default = validateRequest;
