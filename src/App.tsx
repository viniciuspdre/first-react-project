
import { useState } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estrudar programção para se tornar um dev Full-Stack",
      isCompleted: false
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente",
      isCompleted: false
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar matemática para se tornar um dev Full-Stack",
      isCompleted: false
    }
  ])

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
  

  return (
   <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    <div className="w-96 space-y-4">
      <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
      <AddTask />
      <Tasks tasks = {tasks} onTaskClick={onTaskClick} onDeleteClick={deleteTask} />
    </div>
   </div>
  )
}

export default App
