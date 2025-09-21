import React, { useState } from 'react'

const Todolist = () => {

    const [taskVal, setTaskVal] = useState("");
    const [tasks, setTasks] = useState([]);
    
   const HandleAddTask = () => {
        if(taskVal.trim().length > 0) {
            setTasks((prevTask) => {
                return [...prevTask, taskVal.trim()];
            });
            setTaskVal("");
        } else {
            window.alert("Please enter the task info")
        }
    };

    const removeTask = (index) => {
        setTasks((tasks)=> tasks.filter((task, i) => i != index))
    }

    return (
        <div>
            <h2>To Do List: </h2>
            <input type="text"
                value={taskVal} placeholder='Enter Task'
                style={{ marginRight: "10px" }}
                onChange={(e) => setTaskVal(e.target.value)}></input>
            <button onClick={HandleAddTask}>Add Task</button>

            <ul> 
                {tasks?.map((task, index) => {
                    return <li key={index} style={{margin: "5px"}}>
                        {task} <button 
                        style={{marginLeft: "10px"}}
                        onClick={() => removeTask(index)}>Delete</button>
                    </li>
                })}
            </ul>

        </div>
    )
}

export default Todolist
