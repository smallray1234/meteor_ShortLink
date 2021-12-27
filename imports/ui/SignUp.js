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
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>SignUp</h1>
                <form onSubmit={sendSignUp} className="boxed-view__form">
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
                        Create Account
                    </button>
                </form>

                <p>Already have an account?</p>
                <Link to="/login">Go Login!</Link>
            </div>
        </div>
    );
}

export default withRouter(SignUp);
