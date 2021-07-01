import React from 'react';
import { useState } from 'react';


const AddNewToDo = ({setTask}) => {
    const [newTask, setNewTask] = useState('')

    return (
        <div>
            <form
            onSubmit={(event)=>{
                event.preventDefault();
                setTask((currTask)=>{
                  const newTasks = [...currTask];
                  newTasks.push({task: newTask, done: false});
                   return newTasks;

                })
            }}
            >
            <label htmlFor="newTask">Add new task:</label>
            <input id="newTask" value={newTask} onChange={(event)=>setNewTask(event.target.value)}></input>
            <button>Add task</button>
            </form>
        </div>
    );
};

export default AddNewToDo;