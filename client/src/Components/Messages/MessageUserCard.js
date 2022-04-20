import React from "react";
import { Link } from "react-router-dom"


function MessageUserCard({ messageUser, setConversation}) {

    function HandleClick() {
        setConversation(messageUser.id)
    }

    

    return (
        <li className="user-card">
            <Link to={`/messages/${messageUser.id}`} onClick={HandleClick}>{messageUser.username}</Link>
        </li>
    )
}

export default MessageUserCard
