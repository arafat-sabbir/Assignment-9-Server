"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendorServices = void 0;
const app_1 = require("../../../app");
const createNewShop = async (data) => {
    try {
        console.log(data, "data");
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
exports.vendorServices = { createNewShop };
