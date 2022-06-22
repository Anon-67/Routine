import React from "react";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import NewsPage from "../NewsPage/NewsPage";

function LandingPage() {
    const user = useSelector(state => state.state.user)
    return(
        <>
        {user ? <NewsPage /> : <Login /> }
        </>
    )
}

export default LandingPage