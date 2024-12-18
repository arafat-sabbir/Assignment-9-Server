import { Status, User } from "@prisma/client";
import { prisma } from "../../../app";
import hashInfo from "../../utils/hashInfo";
import AppError from "../../errors/appError";
import generateToken from "../../utils/generateToken";
import compareInfo from "../../utils/compareInfo";

const signUpUser = async (payload: User) => {
  const userExists = await prisma.user.findUnique({
    where: { email: payload.email },
  });
  if (userExists) {
    throw new Error("User Already Exists");
  }
  const { password, ...rest } = payload;
  const hashedPassword = await hashInfo(password, 12);
  const user = await prisma.user.create({
    data: {
      ...rest,
      password: hashedPassword,
    },
  });
  return user;
};

const signInUser = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUnique({
    where: { email: payload.email },
  });

  if (user?.status === Status.SUSPENDED) {
    throw new Error("Your Account Is Suspended Contact Support");
  }

  if (!user || user.status === Status.DELETED) {
    throw new AppError(404, "Account Not Found Try Again");
  } else {
    const isPasswordMatch = await compareInfo(payload.password, user?.password);
    if (!isPasswordMatch) {
      throw new AppError(400, "Password Does Not Match Try Again");
    }
    const accessToken = generateToken(user.email, user.id, user.role,user?.name);
    return { accessToken };
  }
};

export const authServices = { signUpUser, signInUser };
