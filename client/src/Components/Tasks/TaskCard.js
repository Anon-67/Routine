import React from "react";
import "./Tasks.css"
import moment from "moment"
import { Button } from "react-bootstrap";


function TaskCard({ task, refresh, setRefresh, rightNow }) {

    function convert(input) {
        return moment(input, 'CCYY-MM-DDThh:mm:ss[.sss]TZD').format('MMMM D h:mm A');
    }

    console.log(task)

    function id() {
        if (moment(rightNow).format('MMMM D h:mm A') > convert(task.due_date) && task.completed === false) {
            return "overdue"
        } else {
            return "on-time"
        }
    }



    function handleClick() {
        fetch(`/tasks/${task.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                completed: true
            })

        })
            .then(setRefresh(!refresh))
    }


    return (
        <>
            {/* <div className={`task-container-${task.completed}`} id={id()} >
                <div>{task.body}</div>
                <div>{convert(task.due_date)}</div>
                
            </div> */}
            <div class="event_item">
                <div class={`ei_Title_task_${task.completed}`} id={id()}>{task.body}</div>
                <div class="ei_Copy_task" id={id()}>{convert(task.due_date)}</div>
                <Button variant="outline-dark" onClick={handleClick}>Complete</Button>
            </div>
        </>
    )
}

export default TaskCard