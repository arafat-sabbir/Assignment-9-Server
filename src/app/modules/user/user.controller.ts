import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUser();
  sendResponse(res, {
    data: result,
    message: "All User Retrieved Successfully",
    statusCode: 200,
  });
});



const getSingleUser = catchAsync(async (req, res) => {
  const result = await userServices.getSingleUser(req.params.id);
  sendResponse(res, {
    data: result,
    message: "Single User Retrieved Successfully",
    statusCode: 200,
  });
})


export const userControllers = { getAllUser,getSingleUser };
