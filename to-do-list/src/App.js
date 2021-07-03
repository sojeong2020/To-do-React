import './App.css';
import Header from './components/Header';
import ShowToDoList from './components/ShowToDoList';
import AddNewToDo from './components/AddNewToDo';

import { useState } from 'react';



function App() {

  const [task, setTask] = useState(
    [{task:"cleaning"}, 
    {task:"cooking"}]);

  return (
    <div className="App">
      <Header />
      <AddNewToDo setTask={setTask}/>
      <ShowToDoList task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
