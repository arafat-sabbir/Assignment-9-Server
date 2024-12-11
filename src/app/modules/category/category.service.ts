import { prisma } from "../../../app";

const getAllCategories = async () => {
  return prisma.category.findMany({});
};

export const categoryServices = { getAllCategories };
