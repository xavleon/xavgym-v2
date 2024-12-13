import React from "react";

const LoginPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1589955898954-9c8d4bb86823?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black/40 backdrop-blur-md p-8 rounded-xl shadow-lg text-white max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Sign in to our platform
        </h2>
        <p className="text-sm mb-6 text-center">
          Login here using your username and password
        </p>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="example@company.com"
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Your Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-black/30 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="Password"
            />
          </div>
          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-lime-500 hover:underline">
              Lost password?
            </a>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-lime-500 hover:bg-lime-600 text-black py-2 rounded-md font-bold"
          >
            Sign in
          </button>
        </form>
        <p className="text-center text-sm mt-6">
          Not registered?{" "}
          <a href="/signup" className="text-lime-500 hover:underline">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
