"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
/**
 * Controller for Admin Module
 *
 * This module contains the controllers for the admin's features.
 */
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const admin_service_1 = require("./admin.service");
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
const updateUserStatus = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.adminServices.updateUserStatus(req.params.id, req.body.status);
    (0, sendResponse_1.default)(res, {
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
const addNewCategory = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.adminServices.addNewCategory(req.body.name);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        message: "Category Added Successfully",
        data: result,
    });
});
const getAllCategories = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.adminServices.getAllCategories();
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "All Category Retrieved Successfully",
        statusCode: 200,
    });
});
const deleteCategory = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.adminServices.deleteCategory(req.params.id);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Category Deleted Successfully",
        statusCode: 200,
    });
});
const updateCategory = (0, catchAsync_1.default)(async (req, res) => {
    const result = await admin_service_1.adminServices.updateCategory(req.params.id, req.body.name);
    (0, sendResponse_1.default)(res, {
        data: result,
        message: "Category Updated Successfully",
        statusCode: 200,
    });
});
exports.adminController = {
    updateUserStatus,
    addNewCategory,
    getAllCategories,
    deleteCategory,
    updateCategory
};
