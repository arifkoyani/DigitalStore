// components/LoginForm.tsx
"use client";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center pt-16 min-h-fit bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Log in to your account</h2>
        <p className="text-center text-gray-500 mb-6">Welcome back! Please enter your details.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            Sign in
          </button>
          <button
            type="button"
            className="w-full mt-4 border border-gray-300 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Sign in with Google
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
