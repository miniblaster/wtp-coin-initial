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
