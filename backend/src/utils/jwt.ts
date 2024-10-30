import jwt from "jsonwebtoken";
const JWT_TOKEN_PASSWORD = process.env.JWT_TOKEN_PASSWORD || "";
export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_TOKEN_PASSWORD, {
    expiresIn: "1h",
  });
};
export const decodeToken = (token: string) => {
  return jwt.verify(token, "Pass1234@12");
};
