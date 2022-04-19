import React, { useState, useEffect } from "react";
import MessageUserCard from "./MessageUserCard";
import "./Messages.css"

function MessageList({ conversation, setConversation, user }) {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('/users')
            .then(r => r.json())
            .then(users => setUsers(users))
    }, [])

    const messageUserMap = users.map((messageUser, index) => {

        if (messageUser.id !== user.id) {
            return <MessageUserCard key={index} messageUser={messageUser} conversation={conversation} setConversation={setConversation} />
        } else {
            return null
        }
    })

    return (
        <div className="card-container">{messageUserMap}</div>
    )

}

export default MessageList