import React from "react";
import "./Agenda.css"
import moment from "moment";


function EventCard({ event, today }) {

    function convert(input) {
        return moment(input, 'CCYY-MM-DDThh:mm:ss[.sss]TZD').format('MMMM D h:mm A');
    }

    return (
        <>
                <div className="event-container">
                    <div>{event.body}</div>
                    <div>{convert(event.start)} - {convert(event.end_time)}</div>
                </div>
        </>
    )
    

}

export default EventCard