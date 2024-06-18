import { Request, Response } from "express";
import httpStatus from "http-status";
import {
  addEmailOtpToDatabase,
  deleteOTPFromDatabase,
  sendEmailOtpToDatabase,
  verifyOTPWithDatabase,
} from "./otp.service";
import { getUserByEmail } from "../auth/auth.service";
import { random } from "../utils";

export const sendEmailOtp = async (req: Request, res: Response) => {
  try {
    const { email, purpose } = req.body;

    if (!email) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Email is required." });
    }

    const _emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!_emailRegex.test(email)) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Invalid email format." });
    }

    const _user = await getUserByEmail(email);
    if (purpose === "FORGOT" && !_user) {
      return res.status(httpStatus.NOT_FOUND).json({ error: "User doesn't exists." });
    }
    if (purpose === "REGISTER" && !!_user) {
      return res.status(httpStatus.CONFLICT).json({ error: "User already exists." });
    }

    const _otp = random(100000, 999999);
    const _otpObj = await addEmailOtpToDatabase(email, _otp, purpose);
    console.log("OtpObj: ", _otpObj);

    await sendEmailOtpToDatabase(email, _otp);

    return res.sendStatus(httpStatus.OK);
  } catch (error: any) {
    console.error("Error in sending otp to email: ", error);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }
};

export const verifyEmailOtpToForgotPassword = async (req: Request, res: Response) => {
  try {
    const { email, otp, password, purpose } = req.body;
    // Validation: email provided or not
    if (!email) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Email is required." });
    }
    // Validation: email format valid or not
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(httpStatus.BAD_REQUEST).json({ error: "Invalid email format." });
    }
    const { error } = await verifyOTPWithDatabase(email, otp, purpose);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json(error);
    }
    // await authService.updatePassword(email, password);
    await deleteOTPFromDatabase(email, otp, purpose);
    return res.status(httpStatus.OK).json({ message: "OTP Verified and Password changed successfully" });
  } catch (error: any) {
    if (error.message === "User not found") {
      return res.status(httpStatus.NOT_FOUND).json({ Error: "User not found" });
    }
    if (error.message === "Error sending email") {
      return res.status(httpStatus.FORBIDDEN).json({ Error: "Error sending email" });
    }
    if (error.message === "OTP Deletion failed") {
      return res.status(httpStatus.NOT_ACCEPTABLE).json({ Error: "OTP Deletion failed" });
    }
    if (error.message === "OTP verification failed") {
      return res.status(httpStatus.NOT_ACCEPTABLE).json({ Error: "OTP verification failed" });
    }
    console.error("Error registering user:", error);
    return res.status(httpStatus.BAD_REQUEST).json({ message: "OTP Doesnt exist/Invalid OTP" });
  }
};

export const otpValidation = async (req: Request, res: Response) => {
  try {
    const { email, otp, purpose } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Email is required." });
    }
    const { isVerified, error } = await verifyOTPWithDatabase(email, otp, purpose);
    if (error) {
      return res.status(httpStatus.BAD_REQUEST).json(error);
    }
    if (!isVerified) {
      return res.sendStatus(httpStatus.NOT_ACCEPTABLE).json({ Error: "OTP entered is wrong" });
    }
    return res.sendStatus(httpStatus.OK);
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    if (error.message === "OTP verification failed") {
      return res.status(httpStatus.NOT_ACCEPTABLE).json({ Error: "OTP verification failed" });
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "" });
  }
};
