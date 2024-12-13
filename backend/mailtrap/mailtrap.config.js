import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = "042306efcb25884448c1686365db57fd";
const SENDER_EMAIL = "xavgym@demomailtrap.com";
//const RECIPIENT_EMAIL = "mrm.leon93@gmail.com";

export const mailtrapClient = new MailtrapClient({ token: TOKEN });

export const sender = { name: "Welcome To XavGym", email: SENDER_EMAIL };

// will not need the below
// client
//   .send({
//     from: sender,
//     to: [{ email: RECIPIENT_EMAIL }],
//     subject: "Hello from XavGym!",
//     text: "Welcome to Mailtrap Sending!",
//   })
//   .then(console.log)
//   .catch(console.error);
