import React, {useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Agenda from './Agenda/Agenda';
import Messages from './Messages/Messages';
import CatchUp from './CatchUp/CatchUp';
import Tasks from './Tasks/Tasks';
import NavBar from './NavBar/NavBar';
import ConversationsList from './Messages/ConversationList';
import LandingPage from './LandingPage/LandingPage';
import NewUser from './NewUser/NewUser';
import { useDispatch, useSelector } from "react-redux"
import { setUser } from './util/stateSlice';

function Content() {
    const user = useSelector(state => state.state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => dispatch(setUser(user)));
          }
        });
      }, [dispatch]);
    
    return (
        <div>
            <Router>
                {user ? (<NavBar />) : null}
                <Routes>
                    {user ? (
                        <>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="agenda" element={<Agenda />} />
                            <Route path="messages" element={<ConversationsList />} />
                            <Route path="catchup" element={<CatchUp />} />
                            <Route path="tasks" element={<Tasks />} />
                            <Route path="messages/:id" element={<Messages />} />
                            <Route path="submit" element={<NewUser />} />

                        </>
                    ) : (
                        <>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="submit" element={<NewUser />} />
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    )
}

export default Content