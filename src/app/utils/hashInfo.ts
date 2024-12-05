import bcrypt from "bcrypt";

const hashInfo = (payload: any, salt: number) => {
  return bcrypt.hash(payload, salt);
};

export default hashInfo;
