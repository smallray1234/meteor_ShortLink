import React, { useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

function SignUp(props) {
  const email = useRef();
  const password = useRef();
  const sendSignUp = (e) => {
    e.preventDefault();
    if (password.current.value.length < 9) {
      console.log('password is less than 9');
    }
    // meteor Account
    Accounts.createUser(
      {
        email: email.current.value.trim(),
        password: password.current.value.trim(),
      },
      (err) => {
        console.log('Signup callback', err);
      }
    );
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={sendSignUp}>
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          ref={password}
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

export default withRouter(SignUp);
