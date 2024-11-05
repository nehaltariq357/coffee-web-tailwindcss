import React from 'react';

const Login = () => (
  <div className="bg-offwhite flex justify-center items-center min-h-screen py-8">
    <div className="bg-lightBrown p-6 md:p-8 rounded-md shadow-md max-w-2xl w-full mx-4 space-y-14 h-[60vh] text-white">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-offwhite">Sign Up / Login</h1>
      <p className="text-center text-sm md:text-base">
        Create an account or log in to continue.
      </p>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          required
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <button
          type="submit"
          className="bg-Brown text-white py-2 rounded-md font-bold hover:bg-opacity-90 transition duration-200"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="text-offwhite font-bold hover:underline"
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  </div>
);

export default Login;
