import { prisma } from "../../../app";

const getAllProduct = async () => {
  return prisma.product.findMany({});
};

export const productServices = { getAllProduct };
