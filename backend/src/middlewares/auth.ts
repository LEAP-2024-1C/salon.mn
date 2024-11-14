import { NextFunction, request, Request, Response } from "express";
import { decodeToken } from "../utils/jwt";
import User from "../models/user.model";

// interface IMyRequest extends Request {
//   user: string | object;
// }
declare global {
  namespace Express {
    interface Request {
      user: any;
    }
  }
} //global bga inteface oorcloh gej bn

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res
      .status(400)
      .json({ message: "Энэ үйлдэл хийхийг тулд нэвтэрнэ үү" });
  }
  const token = req.headers.authorization.split(" ")[1];

  const user = decodeToken(token);

  req.user = user;
  next();
};

export const authorize = (...roles: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user.id;
    const findUser = await User.findById(userId);

    if (!findUser) {
      return res
        .status(400)
        .json({ message: "Энэ үйлдэл хийхийг тулд нэвтэрнэ үү" });
    }

    if (!roles.includes(findUser.role)) {
      return res
        .status(400)
        .json({ message: "Энэ үйлдэл хийхийг эрх хүрэхгүй байна" });
    }

    next();
  };
};
