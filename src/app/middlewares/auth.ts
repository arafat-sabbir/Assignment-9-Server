/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/appError";
import { prisma } from "../../app";
import config from "../config";

/**
 * Middleware to authorize requests.
 * Checks if the request has a valid authorization token.
 * If not, it throws an unauthorized error.
 */

const AuthorizeRequest = (...roles: string[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    // Get the authorization token from the request headers
    const token = req.headers.authorization?.split(" ")[1];
    // If no token is provided, throw an unauthorized error
    if (!token) {
      throw new AppError(401, "Unauthorized Access");
    }
    try {
      const decoded = jwt.verify(
        token,
        config.jwt_access_secret as string
      ) as JwtPayload;

      req.user = decoded;
      const { id } = decoded;

      if (roles.length > 0 && !roles.includes(decoded?.role)) {
        throw new AppError(401, "Unauthorized Access");
      }
      const admin = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      if (!admin) {
        console.log("admin not found");
        throw new Error("User not found");
      }
    } catch (error: any) {
      console.log(error, "", "ërror");
      throw new AppError(401, "Unauthorized Access3");
    }
    next();
  });
};

export default AuthorizeRequest;
