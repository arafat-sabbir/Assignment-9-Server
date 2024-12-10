import { Vendor } from "@prisma/client";
import { prisma } from "../../../app";

const createNewShop = async (data: Vendor) => {
  const result = await prisma.vendor.create({
    data,
  });
  return result;
};

export const vendorServices = { createNewShop };
