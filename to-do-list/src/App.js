import './App.css';
import Header from './components/Header';
import ShowToDoList from './components/ShowToDoList';
import AddNewToDo from './components/AddNewToDo';

import { useState } from 'react';



function App() {

  //setStatus
  const [task, setTask] = useState(
    [{task:"cleaning", done: true}, 
    {task:"cooking", done: false}]);

  return (
    <div className="App">
      <Header />
      <AddNewToDo setTask={setTask}/>
      <ShowToDoList task={task} />
    </div>
  );
}

export default App;
