import {useState} from 'react'


function TodoContainer({task}){

    const [done, setDone] = useState(false)
  
       function changeStateDone(){
        setDone((done)=> !done);
       } 
    
  

    return(
        <div>
            <ol>
              
              {task.id}  {task.task} 
              <br></br>
              <button onClick={changeStateDone}> {done? "Completed Task, great work" : "To Do"} </button>
             
               </ol>
    
       
        
        </div>
       
    )
}
export default TodoContainer;