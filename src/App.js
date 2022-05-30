
import './App.css';
import React, {useState, useEffect} from "react";
import TodoContainer from './Components/TodoContainer'
import NewToDo from './Components/NewToDo'

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
    
      <div className="div"> Front End Dream Job Task List </div>
      <h4 className="h4"> Eyes on the prize </h4>
      <NewToDo onAddNewTask={addNewToDo} tasksArray= {taskList} setTasks={setTasks} />
      <ul id="myUL">
      {taskList}
      
      </ul>
    

    </div>
    
  );
}

export default App;
