import React from 'react';

const Login = () => (
  <div className="bg-offwhite min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl h-[50vh] space-y-10 w-full bg-lightBrown p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-offwhite mb-4">Login</h1>
      <p className="text-center text-sm text-white mb-6">
        Welcome back! Please enter your details to log in.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-Brown"
        />
        <button
          type="submit"
          className="w-full bg-Brown text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition duration-150"
        >
          Log In
        </button>
      </form>
      <div className="flex justify-center mt-4">
        <p className="text-sm text-white">Dont have an account?&nbsp;
          <a href="#" className="font-semibold text-offwhite hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Login;
