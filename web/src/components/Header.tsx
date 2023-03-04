import { NewProjectForm } from "./NewProjectForm"
import { NewTaskForm } from "./NewTaskForm"

export function Header() {
  return (
    <div className="w-full max-w-3xl py-10 mx-auto flex items-center justify-between">
      <h1 className="font-semibold text-4xl">Projetos</h1>
      <NewProjectForm />
    </div>  
  )
}