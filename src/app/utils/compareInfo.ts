import bcrypt from "bcrypt";
const compareInfo = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};
export default compareInfo;
