import { prisma } from "../../../app";

const getAllProduct = async () => {
  return prisma.product.findMany({});
};

const getAllProductForVendor = async (id: string) => {
  const vendor = await prisma.vendor.findUnique({
    where: {
      userId: id,
    },
  });
  const result = await prisma.product.findMany({
    where: {
      vendorId: Number(vendor?.id),
    },
  });
  return result;
};

export const productServices = { getAllProduct, getAllProductForVendor };
