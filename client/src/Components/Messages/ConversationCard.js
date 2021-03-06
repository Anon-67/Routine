import React from "react";
import { Link } from "react-router-dom"
import "./Messages.css"


function ConversationCard({ messageUser, setConversation }) {

    function HandleClick() {
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

export default ConversationCard
