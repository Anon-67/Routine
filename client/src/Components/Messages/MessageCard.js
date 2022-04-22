import React from "react"
import "./Messages.css"

function MessageCard({ message, user }) {


    function className() {
        if (message.user.id === user.id) {
            return "outgoing-bubble"
        } else {
            return "incoming-bubble"
        }
    }
    

    return (
        <>
        <div className={className()}>
            <div>{message.user.username}</div>
            <div className="tester">{message.body}</div>
        </div>
        </>
    )
}

export default MessageCard