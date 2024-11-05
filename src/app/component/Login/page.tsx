import React from 'react';

const Login = () => (
  <div className="sign-up-login">
    <h1>Sign Up / Login</h1>
    <p>Create an account or log in to continue.</p>
    <form className="sign-up-form form-container">
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" className="btn1">Sign Up</button>
      <button type="button" className="btn2">Already have an account? Login</button>
    </form>
  </div>
);

export default Login;
