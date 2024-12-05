import { User } from "@prisma/client";
import { prisma } from "../../../app";
import hashInfo from "../../utils/hashInfo";

const signUpUser = async (payload: User) => {
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

export const authServices = { signUpUser };
