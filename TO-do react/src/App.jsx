import React,{useState,useEffect} from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from "./assets/assets/direct-hit.png";
import doingIcon from "./assets/assets/glowing-star.png";
import doneIcon from "./assets/assets/check-mark-button.png";


const  oldData  = localStorage.getItem("task");
console.log(oldData);

const  App = () => {
  const [tasks,setTasks] = useState(JSON.parse(oldData) || []);
  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(tasks))
  },[tasks])

  const handleDelete = (taskIndex) =>{
    const newTask = tasks.filter((task,index) => index !== taskIndex);
    setTasks(newTask)
  }

  return (
    <div className='app'>
      <TaskForm setTasks = {setTasks}/>
      <main className='app_main'>
        <TaskColumn columnName ="To do" icon={todoIcon} tasks={tasks} status ="todo" handleDelete = {handleDelete}/> 
        <TaskColumn columnName ="Doing" icon={doingIcon}tasks={tasks} status ="doing" handleDelete = {handleDelete}/> 
        <TaskColumn columnName ="Done" icon={doneIcon}tasks={tasks} status ="done" handleDelete = {handleDelete}/> 
      </main>
    </div>
  )
}

export default App