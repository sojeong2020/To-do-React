import React from 'react';
import DeleteTask from './DeleteTask';

const ShowToDoList = ({task}) => {
    console.log(task)
    return (
        <div>
            <h2>Pending Task</h2>
            <ul>{task.map((eachTask)=>{
                return (
                    <li key={eachTask.task}> 
                    <h2>{eachTask.task}</h2>
                    <p>{eachTask.done? '✅':'❌'}</p>
                    <DeleteTask task={eachTask.task}/>
                    </li>
                    
                );
            })}
               
            </ul>         
        </div>
    );
};

export default ShowToDoList;