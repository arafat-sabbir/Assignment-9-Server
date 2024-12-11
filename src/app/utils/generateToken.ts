import jwt from "jsonwebtoken";
import config from "../config";

const generateToken = (
  email: string,
  id: string|number,
  role: "CUSTOMER" | "ADMIN" | "VENDOR"
) => {
  console.log("Secret during generation:", config.jwt_access_secret);


  return jwt.sign({ email, id, role }, config.jwt_access_secret as string, {
    expiresIn: "7d",
  });
};

export default generateToken;
