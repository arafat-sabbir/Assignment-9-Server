import jwt from "jsonwebtoken";
import config from "../config";

const generateToken = (
  email: string,
  id: string|number,
  role: "USER" | "ADMIN" | "VENDOR",
  name: string
) => {
  console.log("Secret during generation:", config.jwt_access_secret);


  return jwt.sign({ email, id, role, name }, config.jwt_access_secret as string, {
    expiresIn: "7d",
  });
};

export default generateToken;

