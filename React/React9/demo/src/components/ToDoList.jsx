import React from 'react'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInputValue, addTask, removeTask } from '../redux/TodoSlice'; 

const ToDoList = () => {

    const {inputValue, todoList} = useSelector((store) => store.toDo); // getting the initial valuse from slice
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => dispatch(setInputValue(e.target.value))}
                placeholder='Enter Task....'
                style={{ marginRight: "10px", padding: "10px" }}
            />
            <button onClick={() => dispatch(addTask(inputValue))}>Add Task</button>
            <ul style={{ margin: "20px" }}>
                {todoList?.map((task, index) => {
                    return <li key={index} style={{ margin: "5px" }}>
                        {task} <button style={{ marginLeft: "10px" }}
                            onClick={() => {
                                dispatch(removeTask(index));
                            }}
                            >
                            Delete
                        </button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default ToDoList;
