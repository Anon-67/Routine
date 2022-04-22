import React, {useState,useEffect} from "react";
import { DateTimePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField } from '@mui/material'
import TaskCard from "./TaskCard";
import Button from 'react-bootstrap/Button';



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
            <form className="new-task-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="event"
                    placeholder="New Task"
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
                <Button  variant="outline-dark" type="submit" className="button-submit">Create</Button>
            </form>


            <div class="center">
                <div class="calendar_events">
                    <h1>Today's Tasks</h1>
                    {tasksMap}
                </div>
            </div>
        </div>
    )
}

export default Tasks