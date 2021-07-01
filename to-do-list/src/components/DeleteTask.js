import React from 'react';
import { useState } from 'react';


const DeleteTask = ({task}) => {
    const [deleteTask,setDeleteTask]=useState(task)

    return (
        <div>
            <button onClick={()=>setDeleteTask((currTask)=>{
              const deletingTask = [currTask];
              console.log(deletingTask)
              deletingTask.splice(0,0)
              return deletingTask;

            })} >
                DELETE
            </button>
            
        </div>
    );
};

export default DeleteTask;