import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import httpStatus from "http-status";
import config from "../config/config";

interface CustomRequest extends Request {
  user?: JwtPayload; // Define a user property of type JwtPayload
}

const checkAuth = (req: CustomRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || typeof authHeader !== "string") {
      return res.status(httpStatus.UNAUTHORIZED).send({ message: "Authorization token is missing" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.jwt.secret) as JwtPayload;

    if (!decoded || !decoded.user || typeof decoded.user !== "object") {
      return res.status(httpStatus.UNAUTHORIZED).send({ message: "Invalid token format" });
    }

    delete decoded.user.password;
    req.user = decoded.user;
    return next();
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Not able to authenticate" });
  }
};

export { checkAuth };
