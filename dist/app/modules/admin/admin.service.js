"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
const app_1 = require("../../../app");
/**
 * Suspend a user
 *
 * This function takes a user ID and sets their status to
 * SUSPENDED.
 *
 * @param {string} id The ID of the user to suspend.
 *
 * @returns {Promise<User>} The updated user object.
 */
const updateUserStatus = async (id, status) => {
    const result = await app_1.prisma.user.update({
        where: { id },
        data: { status: status },
    });
    return result;
};
/**
 * Add a new category
 *
 * This function takes a category name and creates a
 * new category with that name.
 *
 * @param {string} name The name of the new category.
 *
 * @returns {Promise<Category>} The newly created category.
 */
const addNewCategory = async (name) => {
    const result = await app_1.prisma.category.create({
        data: { name },
    });
    return result;
};
const getAllCategories = async () => {
    const result = await app_1.prisma.category.findMany({});
    return result;
};
const deleteCategory = async (id) => {
    const result = await app_1.prisma.category.delete({
        where: { id: Number(id) }, // Ensure proper type conversion
    });
    return result;
};
const updateCategory = async (id, name) => {
    const result = await app_1.prisma.category.update({
        where: { id: Number(id) },
        data: { name },
    });
    console.log(result);
    return result;
};
exports.adminServices = {
    updateUserStatus,
    addNewCategory,
    deleteCategory,
    getAllCategories,
    updateCategory,
};
