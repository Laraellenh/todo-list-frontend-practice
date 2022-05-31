
import './App.css';
import React, {useState, useEffect} from "react";
import TodoContainer from './Components/TodoContainer'
import NewToDo from './Components/NewToDo'
import { Link} from "react-router-dom"
import TicTacToe from './Components/TicTacToe'
import Counter from './Components/Counter'
import Toggle from './Components/Toggle'
import DataBinding from './Components/DataBinding';
import Parent from './Components/Parent'
import SumTwoNum from './Components/SumTwoNum';
// going to use borwser router to put give other components (game, counter) their own paths when I have time

function App() {
const [tasks, setTasks] = useState([]);

function addNewToDo(newTask){
  setTasks([...tasks, newTask])
  
}
// fetch data locally, set it in state array, invoke that w/ the useEffect  hook
useEffect(()=>{
  fetch('http://localhost:3000/tasks')
    .then(r=>r.json())
    .then(setTasks)
  },[])
    
  const taskList = tasks?.map((task)=> <TodoContainer task={task} key={task.id}> {task.task} </TodoContainer>)
 console.log(taskList)


  return (
    
  
    <div  > 
    
      <div 
      
      className="div"> How to Get the Job </div>
      <h4 className="h4"> Look, I'm On a Computer </h4>
      <Toggle/>
      <SumTwoNum/>
      <TicTacToe/>  
      <br></br>
      <DataBinding/>
      <Counter/>
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Parent/>
      <NewToDo onAddNewTask={addNewToDo} tasksArray= {taskList} setTasks={setTasks} />
      {/* <Link to= "/tictactoe"> Play TicTacToe </Link> */}
      <ul id="myUL">
      {taskList}
     
      
      </ul>
      {/* <Routes>
        <Route path = "/tictactoe" element = {<TicTacToe />}>
        </Route>
      </Routes> */}
    </div>
    
  );
}

export default App;
