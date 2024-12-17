"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const app_1 = require("../../../app");
const getAllUser = async () => {
    const result = await app_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            createdAt: true,
        },
    });
    return result;
};
const getSingleUser = async (id) => {
    const result = await app_1.prisma.user.findUniqueOrThrow({
        where: {
            id: id,
        },
    });
    return result;
};
exports.userServices = { getAllUser, getSingleUser };
