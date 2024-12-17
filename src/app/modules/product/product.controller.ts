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

const addNewProduct = catchAsync(async (req, res) => {
  const result = await productServices.addNewProduct({
    vendor: req.user.id,
    images: req.photos,
    ...req.body,
  });
  sendResponse(res, {
    data: result,
    message: "Product Added Successfully",
    statusCode: 201,
  });
});

export const productControllers = { getAllProduct, getAllProductForVendor,addNewProduct };
