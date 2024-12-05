import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.service";

const signUpUser = catchAsync(async (req, res, next) => {
  const result = await authServices.signUpUser(req.body);
  sendResponse(res, {
    data: result,
    message: "SignUp Successful",
    statusCode: 201,
  });
});


export const authControllers = { signUpUser };
