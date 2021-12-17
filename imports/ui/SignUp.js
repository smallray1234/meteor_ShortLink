import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const sendSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={sendSignUp}>
        <input
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>

      <span>Already have an account?</span>
      <Link to="/login">Go Login!</Link>
    </div>
  );
}

export default SignUp;
