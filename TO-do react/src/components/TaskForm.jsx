import React ,{useState}from 'react';
import "./TaskForm.css";
import Tag from './Tag';



function TaskForm({setTasks}) {
 const [taskData , setTaskData] = useState({
  task : "",
  status : "todo",
  tags : []
 });

 const checkTags = (tag)=> {
  return taskData.tags.some(item => item === tag)
 }

 const selectTags = (tag)=>{
  if(taskData.tags.some(item => item === tag))
  {
   const filterTag =  taskData.tags.filter(item => item !== tag)
   setTaskData(prev => {
    return{...prev , tags : filterTag}
   })
  }else{
    setTaskData(prev =>{
      return {...prev , tags : [...prev.tags,tag]}
    })
  }
 }



 const handleChange = (e)=>{
  const {name , value} = e.target;

    setTaskData(pre => {
      return {...pre , [name] : value}
    })
 }
const handleSubmit = (e) =>{
  e.preventDefault();
   console.log(taskData)
   setTasks(prev =>{
    return [...prev , taskData]
   });
   setTaskData({
    task : "",
    status : "todo",
    tags : []
   })
}
 
  return (
   
    <header className='app_header'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={taskData.task} className='task_input' placeholder='Enter your task' name='task'
            onChange={handleChange } />

        <div className="task_form_bottom_line">
            <div>
             <Tag tagName="HTML" selectTags = {selectTags} selected = {checkTags("HTML")}/> 
             <Tag tagName="CSS" selectTags = {selectTags} selected = {checkTags("CSS")}/> 
             <Tag tagName="Javascript"selectTags = {selectTags}selected = {checkTags("Javascript")}/> 
             <Tag tagName="React" selectTags = {selectTags}selected = {checkTags("React")}/> 
            </div>

            <div>
            <select className='task_status' value={taskData.status} name='status' onChange={handleChange}>
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            </select>
            </div>
            <button type="submit" className='task_submit'>+ Add Task</button>
        </div>
        </form>
    </header>
  )
}

export default TaskForm