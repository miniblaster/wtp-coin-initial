import nodemailer from "nodemailer";
import config from "../../config/config";

interface IMessage {
  from: string;
  to: string;
  subject: string;
  text: string;
  html?: string;
}

const transport = nodemailer.createTransport(config.email.smtp);

export const sendEmail = async (to: string, subject: string, text: string, html: string): Promise<void> => {
  try {
    const msg: IMessage = {
      from: config.email.from,
      to,
      subject,
      text,
      html,
    };
    await transport.sendMail(msg);
  } catch (error) {
    console.error("Error sending mail", error);
    throw new Error("Error sending email");
  }
};
