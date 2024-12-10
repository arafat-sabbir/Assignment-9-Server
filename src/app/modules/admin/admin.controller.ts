import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminServices } from "./admin.service";

const suspendUser = catchAsync(async (req, res) => {
  const result = await adminServices.suspendUser(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    message: "User Suspended Successfully",
    data: result,
  });
});

export const adminController = { suspendUser };
