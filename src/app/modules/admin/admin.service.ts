import { Status } from "@prisma/client";
import { prisma } from "../../../app";

const suspendUser = async (id: string) => {
  const result = await prisma.user.update({
    where: { id },
    data: { status: Status.SUSPENDED },
  });
  return result;
};

export const adminServices = { suspendUser };
