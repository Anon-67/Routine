import React, {useState,useEffect} from "react";
import { DateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import TaskCard from "./TaskCard";



function Tasks() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState({})
    const [refresh, setRefresh] = useState(true)
    const rightNow = new Date()

    useEffect(() => {
        fetch("/tasks")
            .then(r => r.json())
            .then(r => setTasks(r))
    }, [refresh])




    function handleSubmit(e) {
        e.preventDefault();


        const taskToSend = {
            body : task,
            due : dueDate            
        }

        fetch("/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSend)
        })
            .then(r => {
                if (r.ok) {
                    setRefresh(refresh => !refresh)
                    setTask("")
                    setDueDate({})
                }
            })
    }

    
    const tasksMap = tasks.map((task, index) => <TaskCard task={task} key ={index} refresh={refresh} setRefresh={setRefresh} rightNow={rightNow} />)




    return (
        <div className="fuck-this-and-your-mother">
            <form className="new-event-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="event"
                    placeholder="New Event"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        label="Due"
                        value={dueDate}
                        onChange={(newValue) => {
                            setDueDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <button type="submit">Create</button>
            </form>

            <div className="tasks-container">
                {tasksMap}
            </div>
        </div>
    )
}

export default Tasks