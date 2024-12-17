import { Product } from "@prisma/client";
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

const addNewProduct = async (data: any) => {
  const { vendor, ...rest } = data;

  // Find vendor by userId
  const vendorData = await prisma.vendor.findUnique({
    where: {
      userId: vendor,
    },
  });

  if (!vendorData) throw new Error("Vendor Not Found");

  // Wrap number fields with Number
  const sanitizedData = {
    ...rest,
    price: Number(rest.price),
    discount: Number(rest.discount),
    inventory: Number(rest.inventory),
    categoryId: Number(rest.categoryId),
  };

  // Create the product
  const result = await prisma.product.create({
    data: { vendorId: vendorData.id, ...sanitizedData },
  });

  return result;
};

export const productServices = {
  getAllProduct,
  getAllProductForVendor,
  addNewProduct,
};
