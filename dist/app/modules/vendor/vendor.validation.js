"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorValidations = void 0;
const zod_1 = require("zod");
const createVendorSchema = zod_1.z.object({
    body: zod_1.z.object({
        shopName: zod_1.z.string({
            required_error: "Shop Name is required",
            invalid_type_error: "Shop Name Must Be A String",
        }),
        shopLogo: zod_1.z.string().optional(),
        shopDesc: zod_1.z.string().optional(),
    }),
});
exports.vendorValidations = { createVendorSchema };
