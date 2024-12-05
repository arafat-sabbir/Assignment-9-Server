import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest = (
  schema: AnyZodObject,
  strictCheck: boolean = false
) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Conditionally apply strict validation
    const finalSchema = strictCheck ? schema.strict() : schema;

    // Parse the request body using the final schema.
    await finalSchema.parseAsync({ body: req.body });

    // Continue to the next middleware.
    next();
  });
};

export default validateRequest;
