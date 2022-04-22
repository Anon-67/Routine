import React from "react";
import "./Agenda.css"
import moment from "moment";
import Invite from "./Invite";
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


function EventCard({ event }) {

    function convert(input) {
        return moment(input, 'CCYY-MM-DDThh:mm:ss[.sss]TZD').format('MMMM D h:mm A');
    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Invite</Popover.Header>
            <Popover.Body>
                <Invite event={event} />
            </Popover.Body>
        </Popover>
    );





    return (
        <>
            <div class="event_item">
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <div class="ei_Dot dot_active"></div>
                </OverlayTrigger>
                <div class="ei_Title">{event.body}</div>
                <div class="ei_Copy">{convert(event.start)} - {convert(event.end_time)}</div>
            </div>

        </>
    )


}

export default EventCard