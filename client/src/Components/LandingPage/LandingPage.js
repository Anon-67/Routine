import React from "react";
import Login from "../Login/Login";
import NewsPage from "../NewsPage/NewsPage";

function LandingPage({setUser, user}) {
    return(
        <>
        {user ? <NewsPage /> : <Login setUser={setUser} user={user}/> }
        </>
    )
}

export default LandingPage