import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { vendorServices } from "./vendor.service";

const createNewShop = catchAsync(async (req, res) => {
  const result = await vendorServices.createNewShop(req.body);
  sendResponse(res, {
    data: result,
    message: "Shop Created Successfully",
    statusCode: 201,
  });
});

export const vendorController = { createNewShop };
