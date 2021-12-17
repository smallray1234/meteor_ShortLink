import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <span>Haven't had an account?</span>
      <Link to="/signup">Go Sign Up!</Link>
    </div>
  );
}

export default Login;
