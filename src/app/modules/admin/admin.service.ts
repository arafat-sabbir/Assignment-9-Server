/**
 * Admin Services
 *
 * This module contains services which are used to
 * manipulate data on behalf of an administrator.
 */
import { Status } from "@prisma/client";
import { prisma } from "../../../app";

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
const suspendUser = async (id: string) => {
  const result = await prisma.user.update({
    where: { id },
    data: { status: Status.SUSPENDED },
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
const addNewCategory = async (name: string) => {
  const result = await prisma.category.create({
    data: { name },
  });
  return result;
};

export const adminServices = { suspendUser,addNewCategory };

