import { Vendor } from "@prisma/client";
import { prisma } from "../../../app";

const createNewShop = async (data: Omit<Vendor, "id"> & { user: string }) => {
  try {
    console.log(data, "data");

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

export const vendorServices = { createNewShop };
