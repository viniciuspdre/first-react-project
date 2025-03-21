import { useState } from "react"

const AddTask = (props) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  return (
    <div className="bg-slate-200 space-y-4 p-6 rounded-md shadow flex flex-col">
      <h1 className="text-slate-500 text-3xl text-center font-bold">Gerenciador de Tarefas</h1>
      <input type="text" placeholder="Digite o título da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/>
      <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}/>
      <button className="bg-slate-500 text-white px-4 py-2 rounded-md" onClick={() => {
        if (!title.trim() || !description.trim()) {
          return alert("Por favor, preencha todos os campos")
        }

        props.onAddTaskSubmit(title, description)
        setTitle("")
        setDescription("")
      }}>Adicionar</button>
    </div>
  )
}

export default AddTask