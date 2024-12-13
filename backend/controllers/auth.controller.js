import { User } from "../models/User.js";

import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailtrap/emails.js";

export const signup = async (req, res) => {
  const { email, password, name, confirmPassword } = req.body;
  try {
    if (!email || !password || !name || !confirmPassword) {
      throw new Error("Please provide all fields");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = generateVerificationCode();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiry: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();
    // jwt token
    generateTokenAndSetCookie(res, user._id);

    // send verification email
    await sendVerificationEmail(user.email, verificationToken);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc, // spread operator to get all the fields from the user object in the database (user._doc)
        password: undefined,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  return res.send("Hello this is the login page");
};

export const logout = async (req, res) => {
  return res.send("Hello this is the logout page");
};
