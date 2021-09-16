import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice';
import './Login.css'

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            )
        }).catch((error) => alert(error))
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoURL: profilePic,
                }))
            })
        }).catch((error) => alert(error))
    };
    return (
        <div className="login">
            <h1>This is DEFINITELY NOT</h1>
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2011-700x177.png" alt="LinkedIN" />

            <form action="">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name (Only if registering)"
                    type="text"
                />
                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile Pic URL (Optional if registering)"
                    type="text"
                />
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email (Member Login)"
                    type="text"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password (Member Login)"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>Member Sign In</button>
            </form>

            <p>Not a member?{"  "}
                <span className="login__register" onClick={register}>Fill in ALL fields to Register Now</span>
            </p>
        </div>
    )
}

export default Login
