export type OtpCollection = {
  email: string;
  otp: string;
  purpose: "REGISTER" | "FORGOT";
  expiresAt: Date;
}
