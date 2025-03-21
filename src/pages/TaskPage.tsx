import { useSearchParams } from "react-router-dom"

export const TaskPage = () => {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center items-center">
      <div className="bg-slate-200 p-6 rounded-md shadow flex flex-col space-y-4">
        <h1 className="text-3xl text-slate-500 font-bold text-center">{title}</h1>
        <div className="bg-slate-500 p-6 rounded-md">
        <p className="font-bold text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}