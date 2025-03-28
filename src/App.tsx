
import { useEffect, useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import {v4} from 'uuid'

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5', {
        method: 'GET'
      })
      const data = await response.json()
      console.log(data)

      setTasks(data)
    }

    fetchTasks()
  }, []) // quando uso useEffect e utilizo uma lista vazia, ele so eh chamado quando inicio a aplicacao

  const onTaskClick = (id) => {
    const newTasks = tasks.map((task) => {
      return task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    })
    setTasks(newTasks)
  }

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const onAddTaskSubmit = (title, description) => {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }
  

  return (
   <div className="w-screen h-screen bg-slate-500 flex justify-center items-center p-6">
    <div className="w-96 space-y-4">
      <AddTask onAddTaskSubmit = {onAddTaskSubmit}/>
      <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteClick={deleteTask} />
    </div>
   </div>
  )
}

export default App
