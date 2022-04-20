import React, { useState, useEffect, useRef } from "react";
import MessageCard from "./MessageCard";
import "./Messages.css"

function Messages({ user, conversation }) {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const [refresh, setRefresh] = useState(true)
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    };
    
    useEffect(scrollToBottom, [messages]);



    useEffect(() => {
        fetch(`/messages/${conversation}`)
            .then(r => r.json())
            .then(r => setMessages(r))
    }, [refresh, conversation])

    function handleSubmit(e) {
        e.preventDefault()

        const messageToSend = {
            body: message,
            sent_to: conversation
        }

        fetch("/messages", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(messageToSend)
        })
            .then(r => {
                if (r.ok) {
                    setRefresh(refresh => !refresh)
                }
            })
        setMessage("")


    }

    const messageMap = messages.map((message, index) => <MessageCard key={index} message={message} user={user} />)


    return (
        <div className="fuck-this">
            <div className="chatbox">
                    {messageMap}
                    <div ref={messagesEndRef} />
            </div>
            <div>
                <form className="chat-type" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="message"
                        className="chat-type"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </form >
            </div>
        </div>
    )
}

export default Messages