import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginToApp = (e) => {
        e.preventDefault();
    };

    const register = () => {};
    return (
        <div className="login">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2011-700x177.png" alt="LinkedIN" />

            <form action="">
                <input placeholder="Full name (Required if registering)" type="text" />
                <input placeholder="Profile Pic URL (optional)" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="password" />
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{"  "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
