import fs from "fs";
import path from "path";
import OTPModel from "src/models/OtpCollection.model";
import { authService } from "../auth";
import { emailService } from "../email";

export const addEmailOtpToDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    let _updatedOtp = await OTPModel.findOneAndUpdate(
      { email, purpose },
      { otp, expiresAt: new Date(Date.now() + 10 * 60000) },
      { new: true }
    );
    if (_updatedOtp) {
      return _updatedOtp;
    } else {
      const _expiresAt = new Date(Date.now() + 10 * 60000);
      return await new OTPModel({ email, otp, purpose, expiresAt: _expiresAt }).save();
    }
  } catch (error) {
    throw error;
  }
};

export const sendEmailOtpToDatabase = async (email: string, otp: number) => {
  try {
    const user = await authService.getUserByEmail(email);
    const name = user?.name;
    const subject = "Your WETP Password Reset Code";

    const htmlFilePath = path.join(__dirname, "../email/forgot_password.html");
    const htmlTemplate = fs.readFileSync(htmlFilePath, "utf8");
    const html = htmlTemplate.replace("{{name}}", name || "").replace("{{otp}}", otp.toString());
    await emailService.sendEmail(email, subject, "", html);

    return;
  } catch (error) {
    throw error;
  }
};

export const verifyOTPWithDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    const validOtp = await OTPModel.findOne({ email, otp, purpose, expiresAt: { $gt: new Date() } });
    if (!validOtp) {
      return { isVerified: false, error: "OTP Validation Failed" };
    }
    return { isVerified: true };
  } catch (error) {
    throw error;
  }
};

export const deleteOTPFromDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    const _deletedOtp = await OTPModel.findOneAndDelete({ email, otp, purpose });
    if (!_deletedOtp) {
      throw new Error("OTP not found");
    }
    return _deletedOtp;
  } catch (error: any) {
    throw error;
  }
};
