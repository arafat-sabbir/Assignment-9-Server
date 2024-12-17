import { Vendor } from "@prisma/client";
import { prisma } from "../../../app";

const createNewShop = async (data: Omit<Vendor, "id"> & { user: string }) => {
  try {
    const result = await prisma.vendor.create({
      data: {
        shopName: data.shopName,
        user: {
          connect: { id: data.user }, // Properly reference the existing user
        },
        shopLogo: data.shopLogo,
        shopDesc: data.shopDesc,
      },
    });

    return result;
  } catch (error) {
    console.error("Failed to create shop:", error);
    throw new Error("Shop creation failed");
  }
};

const getAllMyShop = async (id: string) => {
  const result = await prisma.vendor.findMany({
    where: {
      userId: id,
    },
  });
  return result;
};

const deleteShop = async (id: string) => {
  const result = await prisma.vendor.delete({
    where: {
      id: Number(id),
    },
  });
  return result;
};

export const vendorServices = { createNewShop, getAllMyShop, deleteShop };
