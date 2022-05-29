
import './App.css';
import React, {useState, useEffect} from "react";
import TodoContainer from './Components/TodoContainer'


function App() {
const [tasks, setTasks] = useState([]);

// fetch data locally, set it in state array, invoke that w/ the useEffect  hook
const getData =()=>{
  fetch('db.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }
  )
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(tasks) {
      console.log(tasks);
      setTasks(tasks)
    });
}
useEffect(()=>{
  getData()
},[])
    
  const taskList = tasks?.map((task)=> <TodoContainer task={task} key={task.id}> {task.task} </TodoContainer>)
 console.log(taskList)


  return (
    
  
    <div  > 
      <div className="div"> Front End Dream Job Task List </div>
      <h4 className="h4"> Eyes on the prize </h4>
      <ul id="myUL">
      {taskList}
      
      </ul>
     

    </div>
    
  );
}

export default App;
