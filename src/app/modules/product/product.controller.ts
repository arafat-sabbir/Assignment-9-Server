import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { productServices } from "./product.service";

const getAllProduct = catchAsync(async (req, res) => {
  const result = await productServices.getAllProduct();
  sendResponse(res, {
    data: result,
    message: "All Product Retrieved Successfully",
    statusCode: 200,
  });
});

const getAllProductForVendor = catchAsync(async (req, res) => {
  const result = await productServices.getAllProductForVendor(req.user.id);
  sendResponse(res, {
    data: result,
    message: "All Product Retrieved Successfully",
    statusCode: 200,
  });
});

export const productControllers = { getAllProduct,getAllProductForVendor };
