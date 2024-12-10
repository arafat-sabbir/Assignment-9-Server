import { z } from "zod";

const createNewCategorySchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name Must Be A String",
    }),
  }),
});

export const categoryValidations = { createNewCategorySchema };
