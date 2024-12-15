"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidations = void 0;
const zod_1 = require("zod");
const signUpUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({ required_error: "Name is required" })
            .min(3, { message: "Name must be at least 3 characters long" }),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email address" }),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(8, { message: "Password must be at least 8 characters long" }),
        role: zod_1.z.enum(["USER", "VENDOR"]).default("USER"),
    }),
});
const signInUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email({ message: "Invalid email address" }),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(8, { message: "Password must be at least 8 characters long" }),
    }),
});
exports.authValidations = { signUpUserSchema, signInUserSchema };
