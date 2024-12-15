"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminServices = void 0;
/**
 * Admin Services
 *
 * This module contains services which are used to
 * manipulate data on behalf of an administrator.
 */
const client_1 = require("@prisma/client");
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
const suspendUser = async (id) => {
    const result = await app_1.prisma.user.update({
        where: { id },
        data: { status: client_1.Status.SUSPENDED },
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
exports.adminServices = { suspendUser, addNewCategory };
