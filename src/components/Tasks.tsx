import { ChevronRightIcon, DeleteIcon, TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Tasks = (props) => {
  const navigate = useNavigate()

  const onSeeDetailsClick  = (task) => {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
  <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task) => 
  <li key={task.id} className="flex justify-between items-center gap-2" >
    <button  className="bg-slate-400 text-white p-2 rounded-md w-full text-left" onClick={() => props.onTaskClick(task.id)}>
      {task.title}
      {task.isCompleted && <span className="text-green-500">&nbsp;&nbsp;✔</span>}
    </button>

    <button className="bg-slate-400 text-white p-2 rounded-md" onClick={() => onSeeDetailsClick(task)}><ChevronRightIcon></ChevronRightIcon></button>

    <button className="bg-slate-400 text-white p-2 rounded-md" onClick={() => props.onDeleteClick(task.id)}>
      <TrashIcon></TrashIcon>
    </button>
  </li>
  )}
  </ul>
  )
}

export default Tasks