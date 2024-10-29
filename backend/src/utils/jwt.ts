import jwt from "jsonwebtoken";
const TOKENPASS = process.env.JWT_TOKEN_PASSWORD || "";
export const generateToken = (payload: object) => {
  return jwt.sign(payload, TOKENPASS, {
    expiresIn: "1h",
  });
};
export const decodeToken = (token: string) => {
  return jwt.verify(token, TOKENPASS);
};
