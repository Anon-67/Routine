import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { DateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import "./Agenda.css"
import moment from "moment"


function Agenda({ user }) {
    const [events, setEvents] = useState([])
    const [event, setEvent] = useState("")
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [refresh, setRefresh] = useState(true)
    const current = new Date();
    const today = `${current.getFullYear()}-${current.getMonth()}-${current.getDate()}`

    function convert(input) {
        return moment(input, 'HH:mm').format('h:mm A');
    }

    useEffect(() => {
        fetch("/events")
            .then(r => r.json())
            .then(r => setEvents(r))
    }, [refresh])



    const eventsMap = events.map((event, index) => {
        if (event.user.id === user.id) {
            return <EventCard key={index} event={event} today={today} />
        } else {
            return null
        }
    })

    function handleSubmit(e) {
        e.preventDefault()


        const eventToCreate = {
            body: event,
            start: `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()} ${convert(`${startTime.getDate()} ${startTime.getHours()}:${startTime.getMinutes()}`)}`,
            end: `${endTime.getFullYear()}-${endTime.getMonth()}-${endTime.getDate()} ${convert(`${endTime.getDate()} ${endTime.getHours()}:${endTime.getMinutes()}`)}`
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
                            label="Start Date"
                            value={startTime}
                            onChange={(newValue) => {
                                setStartTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            label="Start Date"
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


