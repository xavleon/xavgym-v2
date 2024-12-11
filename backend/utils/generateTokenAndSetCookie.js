import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, user_id) => {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true, // only accessible on the server side
    secure: process.env.NODE_ENV === "production", // only works on https
    sameSite: "strict", // only works on https
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return token; // This should be inside the function body
};
