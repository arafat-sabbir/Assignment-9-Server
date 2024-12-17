"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminValidations = void 0;
const zod_1 = require("zod");
const updateUserStatusSchema = zod_1.z.object({
    params: zod_1.z.object({
        id: zod_1.z.string({ required_error: "User ID is required" }),
    }),
    body: zod_1.z.object({
        status: zod_1.z.enum(["ACTIVE", "DELETED", "SUSPENDED"]).default("ACTIVE"),
    }),
});
exports.adminValidations = { updateUserStatusSchema };
