import { z } from "zod";

const createVendorSchema = z.object({
  body: z.object({
    shopName: z.string({
      required_error: "Shop Name is required",
      invalid_type_error: "Shop Name Must Be A String",
    }),
    shopLogo: z.string().optional(),
    shopDesc: z.string().optional(),
  }),
});

export const vendorValidations = { createVendorSchema };
