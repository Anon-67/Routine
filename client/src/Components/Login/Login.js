import React, { useState } from "react";
import { Link } from "react-router-dom"

function Login({ setUser }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user));
            }
        });

    }

    return (
        <>
            <div>
                <p>Welcome to Assistance</p>                
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
                <Link to="/submit">Create new account</Link>
            </div>
        </>
    )
}

export default Login