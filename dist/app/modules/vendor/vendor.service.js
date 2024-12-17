"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorServices = void 0;
const app_1 = require("../../../app");
const createNewShop = async (data) => {
    const shopExist = await app_1.prisma.vendor.findUnique({
        where: {
            userId: data.user
        }
    });
    if (shopExist) {
        throw new Error("Shop Already Exist");
    }
    try {
        const result = await app_1.prisma.vendor.create({
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
    }
    catch (error) {
        console.error("Failed to create shop:", error);
        throw new Error("Shop creation failed");
    }
};
const getAllMyShop = async (id) => {
    const result = await app_1.prisma.vendor.findMany({
        where: {
            userId: id,
        },
    });
    return result;
};
const deleteShop = async (userId, id) => {
    const result = await app_1.prisma.vendor.delete({
        where: {
            userId,
            id: Number(id),
        },
    });
    return result;
};
exports.vendorServices = { createNewShop, getAllMyShop, deleteShop };
