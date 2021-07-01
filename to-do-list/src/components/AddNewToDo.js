import React from 'react';

const AddNewToDo = () => {
    return (
        <div>
            <form>
            <label htmlFor="newTask">Add new task:</label>
            <input id="newTask"></input>
            <button>Add task</button>
            </form>
        </div>
    );
};

export default AddNewToDo;