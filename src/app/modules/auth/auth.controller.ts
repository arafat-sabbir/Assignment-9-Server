import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.service";

const signUpUser = catchAsync(async (req, res, next) => {
  console.log(req.body,'body');
  const result = await authServices.signUpUser(req.body);
  sendResponse(res, {
    data: result,
    message: "SignUp Successful",
    statusCode: 201,
  });
});

const signInUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const result = await authServices.signInUser(req.body);
  sendResponse(res, {
    data: result,
    message: "SignIn Successful",
    statusCode: 200,
  });
});

export const authControllers = { signUpUser, signInUser };
