import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { NewTaskForm } from "./NewTaskForm";

type Project = {
  id: string;
  title: string
  createdAt: string;
  finalDate: string;
  task: []
}[];

export function ProjectList() {
  const [projects, setProjects] = useState<Project>([]);

  useEffect(() => {
    api
      .get("projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((e) => { 
        console.log(e.message);
      });
  }, []);

  if(projects.length > 0) {
  return (
    <div className="w-full p-10 flex flex-col items-center justify-center">
      <h1 className="font-semibold text-center text-lg mb-10">Projetos</h1>
      {projects.map((project, id) => {
        const dayAndMounthI = dayjs(project.createdAt).format("DD/MM")
        const dayAndMounthF = dayjs(project.finalDate).format("DD/MM")
        const today = dayjs().startOf('day').toDate()
        const isDateInPast = dayjs(project.finalDate).endOf("day").isBefore(today);
        const totalTasks = project.task.length
        return (
          <table className="font-semibold w-4/6 mb-10" key={id}>
            <thead>
              <tr className="border-2 text-center">
                <td className="border-2 text-lg">Título</td>
                <td className="border-2">Data Inicial</td>
                <td className="border-2">Data Final</td>
                <td className="border-2">Status</td>
                <td className="border-2">Total Tarefas</td>
                <td className="border-2">Criar Tarefa</td>
              </tr>
            </thead>

            <tbody>
              <tr className="border-2 text-center">
                <td className="p-5 border-2">{project.title}</td>
                <td className="border-2">{dayAndMounthI}</td>
                <td className="border-2">{dayAndMounthF}</td>
                <td className="border-2">{isDateInPast ? ('Atrasado'): ('Disponível')}</td>
                <td className="border-2">{totalTasks}</td>
                <td className="border-2">
                  <NewTaskForm 
                    projectId={project.id}
                  />
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
      <h1 className="text-center text-xl">Não há projetos!</h1>  
    )
  }
}
