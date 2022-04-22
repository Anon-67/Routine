import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { DateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import "./Agenda.css"
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import moment from "moment";


function Agenda() {
    const [events, setEvents] = useState([])
    const [event, setEvent] = useState("")
    const [startTime, setStartTime] = useState({})
    const [endTime, setEndTime] = useState({})
    const [refresh, setRefresh] = useState(true)
    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`
    function convert(input) {
        return moment(input, 'CCYY-MM-DDThh:mm:ss[.sss]TZD').format('MMMM Do, YYYY');
    }


    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(r => setEvents(r))
    }, [refresh])



    const eventsMap = events.map((event, index) => {
        return <EventCard key={index} event={event} today={today} />
    })

    function handleSubmit(e) {
        e.preventDefault()


        const eventToCreate = {
            body: event,
            start: startTime,
            end_time: endTime
        }


        fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventToCreate)
        })
            .then(r => {
                if (r.ok) {
                    setRefresh(refresh => !refresh)
                    setEvent("")
                }
            })






    }
    const popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">New Event</Popover.Header>
            <Popover.Body>
                <div className="event-body">
                    <form className="new-event-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="button-submit"
                            placeholder="New Event"
                            value={event}
                            onChange={(e) => setEvent(e.target.value)}
                        />
                        <div className="wrapp-div">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="Start"
                                value={startTime}
                                onChange={(newValue) => {
                                    setStartTime(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        </div>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DateTimePicker
                                label="End"
                                value={endTime}
                                onChange={(newValue) => {
                                    setEndTime(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        <Button variant="outline-dark" type="submit" className="button-submit">Create</Button>
                    </form>
                </div>
            </Popover.Body>
        </Popover>
    );

    return (
        <>



            <div class="calendar light">
                {/* <div class="calendar_header">
                </div> */}
                <div class="calendar_plan">
                    <div class="cl_plan">
                        <div class="cl_title">Today</div>
                        <div class="cl_copy">{convert(current)}</div>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                            <div class="cl_add">
                                <i class="fas fa-plus"></i>
                            </div>
                        </OverlayTrigger>

                    </div>
                </div>
                <div class="calendar_events">
                    <p class="ce_title">Upcoming Events</p>
                    {eventsMap}
                </div>



            </div>


        </>
    )
}

export default Agenda


