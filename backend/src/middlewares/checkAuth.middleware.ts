import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../config/config";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader || typeof authHeader !== "string") {
      return res.status(httpStatus.UNAUTHORIZED).send({ message: "Authorization token is missing" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, config.jwt.secret);
    console.log("Decoded JWT: ", decoded);
    // @ts-ignore
    req.user = decoded;
    return next();
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Not able to authenticate" });
  }
};

export { checkAuth };
