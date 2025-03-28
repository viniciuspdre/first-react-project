import { ChevronLeftIcon } from "lucide-react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const TaskPage = () => {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const navigate = useNavigate()


  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center items-center">
      <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col space-y-4">
        <div className="flex justify-center items-center relative">
          <button className="absolute left-0 top-0 bg-slate-500 p-2 rounded-md text-white" onClick={() => navigate(-1)}><ChevronLeftIcon></ChevronLeftIcon></button>
          <h1 className="text-slate-500 text-3xl text-center font-bold">Detalhes da Tarefa</h1>
        </div>
        <div className="bg-slate-500 p-6 rounded-md space-y-4">
          <h2 className="text-2xl text-white font-bold text-center">{title}</h2>
          <p className="font-bold text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}