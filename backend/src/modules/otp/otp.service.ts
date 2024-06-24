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
    const _user = await authService.getUserByEmail(email);
    const _name = _user?.name;
    const _subject = "Your WETP Password Reset Code";

    const _htmlFilePath = path.join(__dirname, "../email/forgot_password.html");
    const _htmlTemplate = fs.readFileSync(_htmlFilePath, "utf8");
    const _html = _htmlTemplate.replace("{{name}}", _name || "").replace("{{otp}}", otp.toString());
    await emailService.sendEmail(email, _subject, "", _html);

    return;
  } catch (error) {
    throw error;
  }
};

export const verifyOTPWithDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    const _validOtp = await OTPModel.findOne({ email, otp, purpose, expiresAt: { $gt: new Date() } });
    if (!_validOtp) {
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
