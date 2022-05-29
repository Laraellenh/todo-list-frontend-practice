
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

//  const myNodelist = document.getElementsByTagName("LI");
//  for ( let i = 0; i < myNodelist.length; i++) {
//    const span = document.createElement("SPAN");
//    const txt = document.createTextNode("\u00D7");
//    span.className = "close";
//    span.appendChild(txt);
//    myNodelist[i].appendChild(span);
//  }
//  const list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// const close = document.getElementsByClassName("close");
// let i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     const div = this.parentElement;
//     div.style.display = "none";
//   }
// }
  return (
    
  
    <div  id="myDIV" class="header">  Front End Dream Job Task List 
      <ul id="myUL">
      {taskList}
      
      </ul>
     

    </div>
    
  );
}

export default App;
