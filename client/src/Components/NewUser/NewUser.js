import React, { useState } from "react";
import NewsPage from "../NewsPage/NewsPage";

function NewUser({ setUser, user }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")



    function handleSubmit(e) {
        const newUser = {
            firstname,
            lastname,
            username,
            password,
            password_confirmation: passwordConfirm
        }


        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": " application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then(r => setUser(r))
                } else {
                    r.json().then(r => console.log(r))
                }
            })
    }


    return (
        <>
            {user ? (
                <NewsPage />
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <input
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
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
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        id="password_confirmation"
                        placeholder="Re-enter Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                    />
                    <button type="submit">Create User</button>
                </form>)}
        </>
    )
}

export default NewUser