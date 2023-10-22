import { useState } from "react";
import Header from "./Components/Header/Header";
import Tasks from "./Components/Tasks/Tasks";
import { useEffect } from "react";

const LOCAL_STORAGE_KEY = 'todo:tasks';

function App() {
const [tasks , setTasks]=useState([]);

useEffect(()=>{
  loadSavedTasks();
},[])

function setTasksAndSave(newTasks) {
  setTasks(newTasks);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
}


function loadSavedTasks() {
  const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(saved) {
    setTasks(JSON.parse(saved));
  }
}

function addTask(taskTitle){
  setTasksAndSave([
      ...tasks,
      {
        id:crypto.randomUUID(),
        title:taskTitle,
        isCompleted:false
      }
    ]);
  
}

function toggleTaskCompletedById(taskId){
const newTasks = tasks.map(task =>{
  if(task.id === taskId){
    return {
      ...task, 
      isCompleted: !task.isCompleted
    }
  }
  return task;
});
setTasksAndSave(newTasks)
}

function deleteTaskById(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId);
  setTasksAndSave(newTasks);
}


  return (
    <>
      <Header handleAddTask={addTask}/>
      <Tasks tasks={tasks} onComplete={toggleTaskCompletedById} onDelete={deleteTaskById}/>
    </>


  )
}

export default App
