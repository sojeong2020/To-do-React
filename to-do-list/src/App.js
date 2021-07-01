import './App.css';
import Header from './components/Header';
import ShowToDoList from './components/ShowToDoList';
import AddNewToDo from './components/AddNewToDo';


function App() {
  return (
    <div className="App">
      <Header />
      <AddNewToDo />
      <ShowToDoList />
    </div>
  );
}

export default App;
