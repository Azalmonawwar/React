import React, { useState, useEffect } from "react";
import { useUser } from "./context/UserContext"
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate()
    const { isLogIn, setIsLogIn, setUser, user } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isLogIn) {
            navigate('/')
        }
    }, [isLogIn])

    const handleLogin = () => {
        // Simulate a login process, for example, by checking the credentials.
        if (email === '' || password === '') {
            alert('please enter your details')
            return
        }
        setUser(email)
        console.log(user)
        setIsLogIn(true)
    };

    return (
        <div className="login-container">
            {isLogIn ? (
                <div className="welcome-message">Welcome, {user}!</div>
            ) : (
                <div className="login-form">
                    <h2>Login</h2>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin} disabled={email === ''}>Log In</button>
                </div>
            )}
        </div>
    );
};

export default Login;
