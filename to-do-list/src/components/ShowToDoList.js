import React from 'react';
import DeleteTask from './DeleteTask';

const ShowToDoList = ({task, setTask}) => {
    return (
        <div>
            <h2>Pending Task : {task.length}</h2>
            <ul>{task.map((eachTask)=>{
                return (
                    <li key={eachTask.task}> 
                    <h2>{eachTask.task}</h2>
                    <DeleteTask task={eachTask.task}
                    wholeList={task}
                    setTask={setTask}/>
                    </li>
                    
                );
            })}
               
            </ul>         
        </div>
    );
};

export default ShowToDoList;