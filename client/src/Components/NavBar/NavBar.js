import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"

function NavBar({ user, setUser, setConversation }) {

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    function HandleClick() {

        useEffect(() => {
            setConversation(null)
        }, [])
    }


    return (
        <header>
            {user ? (
            <nav className='navbar'>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/agenda">Agenda</Link>
                <Link className="nav-link" to="/tasks">Today's Tasks</Link>
                <Link className="nav-link" to="/messages" onClick={HandleClick()}>Messages</Link>
                <Link className="nav-link" to="/catchup">Catch Up</Link>
                <Link to="/" className="logout" onClick={handleLogoutClick}>Logout</Link>
            </nav>
            ) : (
                <Link className="login" to="login">Login</Link>
            )}
        </header>

    )
}

export default NavBar