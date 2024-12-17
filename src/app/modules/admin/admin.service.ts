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
const updateUserStatus = async (id: string, status: Status) => {
  const result = await prisma.user.update({
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
const addNewCategory = async (name: string) => {
  const result = await prisma.category.create({
    data: { name },
  });
  return result;
};

const getAllCategories = async () => {
  const result = await prisma.category.findMany({});
  return result;
};

const deleteCategory = async (id: any) => {
  const result = await prisma.category.delete({
    where: { id },
  });
  return result;
};

const updateCategory = async (id: any, name: string) => {
  const result = await prisma.category.update({
    where: { id },
    data: { name },
  });
  return result;
};

export const adminServices = {
  updateUserStatus,
  addNewCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
};
