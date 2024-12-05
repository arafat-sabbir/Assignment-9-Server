import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const getAllUser = catchAsync(async (req, res, next) => {
  const result = await userServices.getAllUser();
  sendResponse(res, {
    data: result,
    message: "All User Retrieved Successfully",
    statusCode: 200,
  });
});

export const userControllers = { getAllUser };
