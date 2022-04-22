import React, { useState, useEffect, useRef } from "react";
import MessageCard from "./MessageCard";
import "./Messages.css"


function Messages({ user, conversation }) {
    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState("")
    const [refresh, setRefresh] = useState(true)
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ 
            behavior: "auto",
            block: "end"
     });
    };

    useEffect(scrollToBottom, [messages]);



    useEffect(() => {
        fetch(`/messages/${conversation.id}`)
            .then(r => r.json())
            .then(r => setMessages(r))
    }, [refresh, conversation])

    function handleSubmit(e) {
        e.preventDefault()

        const messageToSend = {
            body: message,
            sent_to: conversation.id
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
    console.log(conversation.username.slice(0,1).toUpperCase())


    return (
        <>


            <div class="chat-container">
                <div class="chatbox">
                    <div class="top-bar">
                        <div class="avatar"><p>{conversation.username.slice(0,1).toUpperCase()}</p></div>
                        <div class="name">{conversation.username}</div>
                        <div class="icons">
                            <i class="fas fa-phone"></i>
                            <i class="fas fa-video"></i>
                        </div>
                    </div>
                    <div class="middle">
                        {messageMap}
                        <div ref={messagesEndRef} className="ref-div" />
                    </div>
                    
                </div>
            </div>
            <div class="bottom-bar">
                <div class="chat">
                    <form className="chat-type" onSubmit={handleSubmit}>
                        <input
                            className="chat-input"
                            type="text"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </form>
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>

        </>
    )
}

export default Messages