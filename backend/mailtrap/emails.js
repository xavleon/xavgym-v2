import { User } from "../models/User.js";
import { verficationTokenEmail } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }]; // Recipient array as per Mailtrap API

  const user = await User.findOne({
    email,
  });

  const emailHtml = verficationTokenEmail(verificationToken, user.name);

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      text: `Your verification code is ${verificationToken}`,
      html: emailHtml,
      category: "Email verification", // Optional, but nice to categorize emails
    });

    console.log("Email Sent Successfully: ", response);
  } catch (error) {
    console.error(`Error sending verification email: ${error.message}`);
    throw new Error("Error sending verification email");
  }
};