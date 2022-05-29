// create an input that can be typed into to add a new task that persists
import React, {useState} from 'react'

function NewToDo({onAddNewTask, tasksArray, setTasks }) {
const [newTask, setNewTask] = useState ("")

console.log(tasksArray.length+1)

    function handleSubmit(e){
        e.preventDefault();
        const formInput = {
            task_task: newTask.task,
            task_id: tasksArray.length + 1
        }
        console.log(formInput)
        fetch('db.json', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInput)
            .then(function(response){
                console.log(response);
                return response.json();
            })
            .then(function(newTask){
                console.log(newTask)
                setNewTask(newTask)
                setTasks([...tasksArray, newTask])
            })
        })
    }
    function handleChange(e){
        setNewTask(e.target.value)
        console.log(e.target.value)
    }
    return (
        <form
            type = "submit"
           
            >
         <label> Enter New Task </label> 
            <input type = "text"
            placehold = "enter a new task here"
            value = {newTask.task}
            onChange ={handleChange}
           />
           <button
           type= "submit"
            onSubmit =  {handleSubmit}>
                Submit
            </button>
        </form>
        
        
    )
}
export default NewToDo;