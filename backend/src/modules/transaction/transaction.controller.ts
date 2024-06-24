import { Request, Response } from "express";
import httpStatus from "http-status";
import { addEmailOtpToDatabase } from "./transaction.service";
import { getUserByEmail, getUserByUsername } from "../auth/auth.service";
import { random } from "../utils";

export const sendPayment = async (req: Request, res: Response) => {
  try {
    const { username, amount, currency, wethAmount } = req.body;

    if (!username) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Username is required." });
    }

    const _user = await getUserByUsername(username);
    if (!_user) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "User doesn't exists." });
    }

    return res.sendStatus(httpStatus.OK);
  } catch (error: any) {
    console.error("Error in sending otp to email: ", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};
