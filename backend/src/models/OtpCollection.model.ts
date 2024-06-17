import mongoose, { Schema } from "mongoose";
import { OtpCollection } from "src/types/otpCollection.type";

const OTPSchema: Schema = new Schema(
  {
    email: { type: String, ref: "User", required: true },
    otp: { type: String },
    purpose: { type: Boolean },
    expires_at: { type: Date },
  },
  { timestamps: true }
);

const OTPModel = mongoose.model<OtpCollection>("OTP", OTPSchema);

export default OTPModel;
