import React from 'react';
import { useState } from 'react';


const AddNewToDo = ({setTask}) => {
    const [newTask, setNewTask] = useState('')

    return (
        <div className="add">
            <form
            onSubmit={(event)=>{
                const regex = /^([^\s]*[A-Za-z0-9]\s*)[^\s]*$/;
                event.preventDefault();
                if (newTask.length > 0 && regex.test(newTask)) {
                setTask((currTask)=>{
                  const newTasks = [...currTask];
                  newTasks.push({task: newTask});
                   return newTasks;
                })
            }
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