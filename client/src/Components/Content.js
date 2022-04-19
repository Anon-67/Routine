import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agenda from './Agenda/Agenda';
import Messages from './Messages/Messages';
import CatchUp from './CatchUp/CatchUp';
import Tasks from './Tasks/Tasks';
import NavBar from './NavBar/NavBar';
import MessageList from './Messages/MessageList';
import LandingPage from './LandingPage/LandingPage';
import NewUser from './NewUser/NewUser';

function Content() {
    const [user, setUser] = useState(null);
    const [conversation, setConversation] = useState(null)

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);
    
    return (
        <div>
            <Router>
                {user ? (<NavBar user={user} setUser={setUser} setConversation={setConversation} />) : null}
                <Routes>
                    {user ? (
                        <>
                            <Route path="/" element={<LandingPage user={user}/>} />
                            <Route path="agenda" element={<Agenda  user={user}/>} />
                            <Route path="messages" element={<MessageList conversation={conversation} setConversation={setConversation} user={user}/>} />
                            <Route path="catchup" element={<CatchUp />} />
                            <Route path="tasks" element={<Tasks />} />
                            <Route path="messages/:id" element={<Messages user={user} conversation={conversation} />} />
                            <Route path="submit" element={<NewUser setUser={setUser} user={user}/>} />

                        </>
                    ) : (
                        <>
                            <Route path="/" element={<LandingPage setUser={setUser} user={user} />} />
                            <Route path="submit" element={<NewUser setUser={setUser} user={user}/>} />
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    )
}

export default Content