import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { api } from "../lib/axios"

type Task = {
    projectId: string
    title: string
    createdAt: string
    finalDate: string
    isComplete: boolean
  }[]

export function TaskList() {
  const [tasks, setTasks] = useState<Task>([])

  useEffect(() => {
    api
      .get('tasks')
      .then((response) => {
      setTasks(response.data)
    })
    .catch((e) => {
      console.log(e.message )
    }) 
  }, [])

  if(tasks.length > 0) {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-lg mb-10">Tarefas</h1>
      {tasks.map((task, id) => {
        const dayAndMounthI = dayjs(task.createdAt).format("DD/MM")
        const dayAndMounthF = dayjs(task.finalDate).format("DD/MM")
        const today = dayjs().startOf('day').toDate()
        const isDateInPast = dayjs(task.finalDate).endOf("day").isBefore(today);
        return (
          <table className="font-semibold w-4/6 mb-10" key={id}>
            <thead>
              <tr className="border-2 text-center">
                <td>Id Projeto</td>
                <td className="border-2 text-lg">Título</td>
                <td className="border-2">Data Inicial</td>
                <td className="border-2">Data Final</td>
                <td className="border-2">Status</td>
                <td className="border-2">Finalizar Tarefa</td>
              </tr>
            </thead>

            <tbody>
              <tr className="border-2 text-center">
                <td>{task.projectId}</td>
                <td className="p-5 border-2">{task.title}</td>
                <td className="border-2">{dayAndMounthI}</td>
                <td className="border-2">{dayAndMounthF}</td>
                <td className="border-2">{isDateInPast ? ('Atrasado'): ('Disponível')}</td>
                <td className="h-full border-2 flex">
                  <button className="w-full  bg-green-600 mr-5 p-2 rounded-md">
                    Finalizar
                  </button>
                  <button className="w-full bg-red-600 p-2 rounded-md">
                    Deletar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
  } else {
    return(
      <h1 className="text-center text-xl">Não há tarefas!</h1>  
    )
  }
}