import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css"
import Navbar from 'react-bootstrap/Navbar'
import { NavDropdown } from 'react-bootstrap'
import Avatar from '@mui/material/Avatar'
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../util/stateSlice";




function NavBar() {
    const user = useSelector(state => state.state.user)
    const dispatch = useDispatch()

    function handleLogoutClick() {
        fetch("/logout", {
            method: "DELETE"
        })
            .then((r) => {
                if (r.ok) {
                    dispatch(setUser(null));
                }
            });
    }


    return (
        <header>
            {user ? (
                <Navbar className="navBar" sticky="top" expand="lg">
                    <Navbar.Brand className="spacing-left-logo" >Routine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <nav className='navbar'>
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/agenda">Agenda</Link>
                            <Link className="nav-link" to="/tasks">Today's Tasks</Link>
                            <Link className="nav-link" to="/messages">Messages</Link>
                            {/* <Link className="nav-link" to="/catchup">Catch Up</Link> */}


                        </nav>
                        <Navbar.Collapse className="justify-content-end">
                            <NavDropdown id="basic-nav-dropdown">
                                <NavDropdown.Item href="/" onClick={handleLogoutClick}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Navbar.Text className="spacing-right-less">
                                {user.username}
                            </Navbar.Text>
                            <Avatar className="spacing-right" alt={user.username}></Avatar>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Navbar>
            ) : (
                <Link className="login" to="login">Login</Link>
            )}
        </header>


    )
}

export default NavBar