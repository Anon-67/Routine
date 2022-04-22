import React, { useState } from "react";
import NewsPage from "../NewsPage/NewsPage";
import "./NewUser.css"

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
                <div class="card">
                    <div class="card-image">
                        <h2 class="card-heading">
                            Get started
                            <small>Let's create your account!</small>
                        </h2>
                    </div>
                    <form class="card-form" onSubmit={handleSubmit}>
                        <div class="input">
                            <input placeholder="First Name" type="text" class="input-field" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                        </div>
                        <div class="input">
                            <input placeholder="Last Name" type="text" class="input-field" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                        </div>
                        <div class="input">
                            <input placeholder="Username" type="text" class="input-field" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div class="input">
                            <input placeholder="Password" type="password" class="input-field" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <div class="input">
                            <input placeholder="Confirm Password" type="password" class="input-field" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required />
                        </div>
                        <div class="action">
                            <button class="action-button" type="submit">Get started</button>
                        </div>
                    </form>
                    <div class="card-info">
                        <p></p>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewUser