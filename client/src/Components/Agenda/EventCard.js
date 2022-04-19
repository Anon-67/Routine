import React from "react";
import "./Agenda.css"


function EventCard({ event, today }) {

    return (
        <>
            {(event.start.slice(0, 9) === today.slice(0,9)) ? (
                <div className="event-container">
                    <div>{event.body}</div>
                    <div>{event.start} - {event.end}</div>
                </div>
            ) : (
                null
            )}
        </>
    )
    

}

export default EventCard