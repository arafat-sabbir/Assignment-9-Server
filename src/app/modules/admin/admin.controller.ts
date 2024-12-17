/**
 * Controller for Admin Module
 *
 * This module contains the controllers for the admin's features.
 */
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminServices } from "./admin.service";

/**
 * Suspend a user
 *
 * This function takes a user id and sets their status to
 * SUSPENDED.
 *
 * @param {string} id The ID of the user to suspend.
 *
 * @returns {Promise<User>} The updated user object.
 */
const updateUserStatus = catchAsync(async (req, res) => {
  const result = await adminServices.updateUserStatus(
    req.params.id,
    req.body.status
  );
  sendResponse(res, {
    statusCode: 200,
    message: "User Status Updated Successfully",
    data: result,
  });
});

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
const addNewCategory = catchAsync(async (req, res) => {
  const result = await adminServices.addNewCategory(req.body.name);
  sendResponse(res, {
    statusCode: 200,
    message: "Category Added Successfully",
    data: result,
  });
});

const getAllCategories = catchAsync(async (req, res) => {
  const result = await adminServices.getAllCategories();
  sendResponse(res, {
    data: result,
    message: "All Category Retrieved Successfully",
    statusCode: 200,
  });
});

const deleteCategory = catchAsync(async (req, res) => {
  const result = await adminServices.deleteCategory(req.params.id);
  sendResponse(res, {
    data: result,
    message: "Category Deleted Successfully",
    statusCode: 200,
  });
});


const updateCategory = catchAsync(async (req, res) => { 
  const result = await adminServices.updateCategory(req.params.id, req.body.name);
  sendResponse(res, {
    data: result,
    message: "Category Updated Successfully", 
    statusCode: 200,
  });
});




export const adminController = {
  updateUserStatus,
  addNewCategory,
  getAllCategories,
  deleteCategory,
  updateCategory
};
