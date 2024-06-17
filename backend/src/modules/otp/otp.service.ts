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
    const text = `Hello ${name},
    You're on your way to resetting your password for WETP. To ensure your account's security, we've sent you a One-Time Password (OTP) that you'll need to enter on the password reset page.

    Here is your OTP: ${otp}.

    If you did not request a password reset, please ignore this email, but it may also be wise to change your password if you suspect someone else has attempted to access your account.
    If you encounter any issues or need further assistance, our support team is here for you at support@wetp.io.
    Thank you for taking steps to secure your account.

    Best regards,
    The WETP Team`;

    const htmlFilePath = path.join(__dirname, "../email/forgot_password.html");
    const htmlTemplate = fs.readFileSync(htmlFilePath, "utf8");
    const html = htmlTemplate.replace("{{name}}", name || "").replace("{{otp}}", otp.toString());
    await emailService.sendEmail(email, subject, text, html);
  } catch (error) {
    throw error;
  }
};

export const verifyOTPWithDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    const validOtp = await OTPModel.findOne({
      email,
      otp,
      purpose,
      expiresAt: { $gt: new Date() },
    });
    if (!validOtp) {
      return { isVerified: false, error: "OTP Validation Failed" };
    }
    return { isVerified: true };
  } catch (error) {
    throw new Error("OTP verification failed");
  }
};

export const deleteOTPFromDatabase = async (email: string, otp: number, purpose: string) => {
  try {
    console.log(email, otp, purpose);
    // const verifyOTPQuery = `
    // SELECT * FROM otp_collection
    // WHERE email = $1 AND otp = $2 AND purpose = $3 AND expires_at > NOW()`;
    // const result = await dbClient.query(verifyOTPQuery, [email, otp, purpose]);
    // console.log(result.rows);
    // if (result.rows.length === 0) {
    //   throw new Error("OTP not found or expired");
    // }

    // const deleteOTPQuery = `
    //   DELETE FROM otp_collection
    //   WHERE email = $1 AND otp = $2 AND purpose = $3`;
    // const { rows } = await dbClient.query(deleteOTPQuery, [email, otp, purpose]);
    // console.log("OTP deleted", rows);
    // return { message: "Deleted" };
  } catch (error: any) {
    if (error.message.includes("OTP not found or expired")) {
      throw error;
    }
    throw new Error("OTP Deletion failed");
  }
};
