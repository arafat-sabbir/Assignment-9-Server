import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { categoryServices } from "./category.service";

const getAllCategories = catchAsync(async (req, res) => {
  const result = await categoryServices.getAllCategories();
  sendResponse(res, {
    data: result,
    message: "All Category Retrieved Successfully",
    statusCode: 200,
  });
});

export const categoryControllers = { getAllCategories };
