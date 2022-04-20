import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { DateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import "./Agenda.css"

function Agenda() {
    const [events, setEvents] = useState([])
    const [event, setEvent] = useState("")
    const [startTime, setStartTime] = useState({})
    const [endTime, setEndTime] = useState({})
    const [refresh, setRefresh] = useState(true)
    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`


    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(r => setEvents(r))
    }, [refresh])



    const eventsMap = events.map((event, index) => {
        console.log(event)
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


    return (
        <>
            <div>
                <form className="new-event-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="event"
                        placeholder="New Event"
                        value={event}
                        onChange={(e) => setEvent(e.target.value)}
                    />
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
                    <button type="submit">Create</button>
                </form>


            </div>
            <div className="events-container">
                {eventsMap}
            </div>
        </>
    )
}

export default Agenda


