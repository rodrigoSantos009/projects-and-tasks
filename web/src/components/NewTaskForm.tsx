import { X } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

type INewTaskForm = {
  projectId: string
}


export function NewTaskForm({ projectId }: INewTaskForm) {
  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')
  const [finalDate, setFinalDate] = useState(Date)

  async function createNewTask(event: FormEvent) {
    event.preventDefault()
  
    if(!title || !finalDate) {
      alert('Insira os dados!')
      return 
    }

    await api.post('/projects/tasks', {
      title,
      finalDate,
      projectId
    })

    setTitle('')
    setFinalDate('')
    setShowModal(false)

    alert('Tarefa criada com sucesso!')
  }

  return (
    <>
    <button
        className="rounded-lg px-8 py-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Nova Tarefa
      </button>
      {
        showModal ? (
          <>
            <div className="w-screen h-screen bg-black/80 fixed inset-0">
            <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-900 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Criar Tarefa</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus-ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
                     <X size={24}/>
                    </span>
                  </button>
                </div>
                <div 
              className="relative p-6  flex-auto"
            >
              <form
                className="text-left shadow-md rounded px-8 pt-6 pb-8 w-full"
                onSubmit={createNewTask}
              >
                <label className="font-semibold leading-tight mt-4">
                  Título da Tarefa
                </label>
                <input 
                  type="text"
                  className="w-full p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus-ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900" 
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
                <label className="font-semibold leading-tight mt-4">
                  Data Final
                </label>
                <input 
                  type="date"
                  className="w-full p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus-ring-violet-500 focus:ring-offset-2 focus:ring-offset-zinc-900" 
                  value={finalDate}
                  onChange={(event) => setFinalDate(event.target.value)}
                />
                <button
                  type="submit"
                  className="w-full rounded-lg mt-5 px-8 py-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors"
                >
                  Criar
                </button>
              </form>
            </div>
              </div>
            </div>
          </div>
          </>  
        ) : null
      }
    </>  
  )
}