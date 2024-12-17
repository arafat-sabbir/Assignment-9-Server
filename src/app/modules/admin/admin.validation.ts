import { z } from "zod";

const updateUserStatusSchema = z.object({
  params: z.object({
    id: z.string({ required_error: "User ID is required" }),
  }),
  body: z.object({
    status: z.enum(["ACTIVE", "DELETED", "SUSPENDED"]).default("ACTIVE"),
  }),
});

export const adminValidations = { updateUserStatusSchema };
