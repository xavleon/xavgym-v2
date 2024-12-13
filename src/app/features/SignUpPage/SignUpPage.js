"use client";
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (!username || !email || !password || !confirmPassword) {
      toast("Please fill in all the fields", "error");
      return;
    }

    if (password !== confirmPassword) {
      toast("Passwords do not match", "error");
      return;
    }

    const payload = {
      name: username,
      email,
      password,
      confirmPassword,
    };

    const response = await axios.post(
      "http://localhost:4000/api/auth/signup",
      payload
    );

    console.log(response.data);
    toast(
      "Account created successfully! Please check your email to verify your account",
      "success"
    );
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589955898954-9c8d4bb86823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: { marginBottom: "40px" },
        }}
      />

      <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg text-white max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign Up to our platform
        </h2>
        <p className="text-sm mb-6 text-center">
          Sign Up here choose your username and password
        </p>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              w
            />
          </div>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="example@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-black py-2 rounded-md font-bold"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-lime-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
