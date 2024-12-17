import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { vendorServices } from "./vendor.service";

const createNewShop = catchAsync(async (req, res) => {
  const result = await vendorServices.createNewShop({
    shopLogo: req.photo,
    ...req.body,
  });
  sendResponse(res, {
    data: result,
    message: "Shop Created Successfully",
    statusCode: 201,
  });
});

const getAllMyShop = catchAsync(async (req, res) => {
  const result = await vendorServices.getAllMyShop(req.user.id);
  sendResponse(res, {
    data: result,
    message: "Shops Retrieved Successfully",
    statusCode: 200,
  });
});

export const vendorController = { createNewShop, getAllMyShop };
