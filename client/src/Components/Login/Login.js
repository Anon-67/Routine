import React, { useState } from "react";
import "./Login.css"

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
            <div className="test-parent">

                <div class="login-card">
                    <div className="card-image-login">
                        <h2 class="card-heading">
                            Welcome back!
                            <small>Let's get your day started!</small>
                        </h2>
                    </div>
                    <form class="card-form" onSubmit={handleSubmit}>
                        <div class="input">
                            <input placeholder="Username" type="text" class="input-field" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div class="input">
                            <input placeholder="Password" type="password" class="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div class="action">
                            <button class="action-button" type="submit">Get started</button>
                        </div>
                    </form>
                    <div class="card-info">
                        <p>No account?<a href="/submit">Create a new account</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login