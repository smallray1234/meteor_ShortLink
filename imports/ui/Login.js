import React, { useRef, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

function Login(props) {
    const email = useRef();
    const password = useRef();
    const [errMsg, setErrMsg] = useState('');
    const sendLogin = (e) => {
        e.preventDefault();
        // meteor login
        Meteor.loginWithPassword(
            { email: email.current.value },
            password.current.value,
            (err) => {
                console.log('Login callback', err);
                if (err) {
                    setErrMsg(`Error: ${err.reason}`);
                } else {
                    setErrMsg('');
                }
            }
        );
    };
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Login</h1>
                <span>{errMsg}</span>
                <form onSubmit={sendLogin} className="boxed-view__form">
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
                    <button type="submit" className="button">
                        Login
                    </button>
                </form>

                <p>Do not have an account?</p>
                <Link to="/signup">Go SignUp!</Link>
            </div>
        </div>
    );
}

export default withRouter(Login);
