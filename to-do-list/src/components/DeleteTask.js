import React from 'react';
import { useState } from 'react';


const DeleteTask = ({task}) => {


 

    return (
        <div>
            <button onClick={()=>clearTask((currtask)=>{
                const deletingTask = [currtask];
                deletingTask.splice(0,1)
                return task.deletingTask
            })}>delete
            </button>
            
        </div>
    );
};

export default DeleteTask;