import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';

function Invite({event}) {
    const [friendsList, setFriendsList] = useState([])
    const [friend, setFriend] = useState("")

    useEffect(() => {
        fetch("/users")
            .then(r => r.json())
            .then(r => setFriendsList(r))
    }, [friend])

    const friendsMap = friendsList.map((friend, index) => <option key={index} value={friend.id}>{friend.username}</option>)

    function handleSubmit(e) {
        e.preventDefault()

        const invitation = {
            user_id: friend,
            event_id: event.id
        }

        fetch("/invitations", {
            method: "POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(invitation)
        })
    }



    return(
        <div>
        <form  onSubmit={handleSubmit} value={friend}>
            <select className="friend-select" onChange={(e) => setFriend(e.target.value)}>
            <option value="" disabled selected>Invite a friend!</option>
                {friendsMap}
            </select> 
            <Button variant="outline-dark" className="invite" type="submit">Done!</Button> 
        </form>
        
        
        </div>
    )

}

export default Invite