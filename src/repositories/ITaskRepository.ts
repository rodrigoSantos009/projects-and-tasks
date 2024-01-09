import { Task } from "../entities/Task";

export interface ITaskRepository {
  save(task: Task): Promise<void>

  get(id: string): Promise<Task | null>

  getAll(): Promise<Task[]>

  getByProjectId(projectId: string): Promise<Task[]>

  taskToggle(id: string): Promise<void>

  delete(id: string): Promise<void>
}