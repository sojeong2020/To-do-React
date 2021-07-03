import React from 'react';


const DeleteTask = ({ task, wholeList, setTask }) => {
    const deleteTask = () => {
      const copyList = [...wholeList];
      console.log(copyList, "firstlist");
      copyList.splice(
        copyList.findIndex((item) => item.task === "task"),
        1
      );
  
      // console.log(copyList.length);
  
      setTask(copyList);
    };
  
    return (
      <div>
        <button className="bin" onClick={() => deleteTask()}>
          🗑️
        </button>
      </div>
    );
  };

export default DeleteTask;