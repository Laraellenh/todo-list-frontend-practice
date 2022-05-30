// create an input that can be typed into to add a new task that persists
import React, {useState} from 'react'

function NewToDo({onAddNewTask, tasksArray, setTasks }) {
const [newTask, setNewTask] = useState ("")

    function handleSubmit(e){
        
        const formInput = {
            task: newTask
        }

        e.preventDefault()
        
        fetch('http://localhost:3000/tasks', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formInput)
        })
        .then(r=>r.json())
        .then(console.log)
        setNewTask("")
    }

    function handleChange(e){
        setNewTask(e.target.value)
        console.log(e.target.value)
    }

    console.log(newTask)
    return (
        <form onSubmit={handleSubmit}>
         <label> Enter New Task </label> 
            <input type = "text"
            placeholder = "enter a new task here"
            value = {newTask}
            onChange ={handleChange}
           />
           <button
           type= "submit"
           >
            Submit
            </button>
        </form>
    )
}
export default NewToDo;