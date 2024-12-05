import { prisma } from "../../../app";

const getAllUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
  return result;
};

export const userServices= { getAllUser };
