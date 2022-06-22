import React, { useEffect } from "react";
import ConversationCard from "./ConversationCard";
import "./Messages.css"
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../util/stateSlice";

function ConversationsList({ conversation, setConversation }) {
    const user = useSelector(state => state.state.user)
    const users = useSelector(state => state.state.allUsers)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [dispatch])

    const messageUserMap = users.map((messageUser, index) => {
        console.log(messageUser)

        if (messageUser.id !== user.id) {
            return <ConversationCard key={index} messageUser={messageUser} conversation={conversation} setConversation={setConversation} />
        } else {
            return null
        }
    })

    return (
        <>
            <ul class="people">
                {messageUserMap}
            </ul>
        </>
    )

}

export default ConversationsList