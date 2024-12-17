import { Status } from "@prisma/client";
import { prisma } from "../../../app";

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      createdAt: true,
    },
  });
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

export const userServices = { getAllUser, getSingleUser };
