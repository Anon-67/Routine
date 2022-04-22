import React from "react";
import { Link } from "react-router-dom"
import "./Messages.css"


function MessageUserCard({ messageUser, setConversation }) {

    function HandleClick() {
        console.log(messageUser)
        setConversation(messageUser)
    }



    return (
        <>

            <li class="person focus">
                <Link to={`/messages/${messageUser.id}`} onClick={HandleClick} className="title">{messageUser.username}</Link>
            </li>
        </>
    )
}

export default MessageUserCard
