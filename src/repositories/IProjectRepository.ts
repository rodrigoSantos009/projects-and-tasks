import { Project } from "../entities/Project";
import { Summary } from "./implementations/PrismaProjectsRepository";

export interface IProjectRepository {
  save(project: Project): Promise<void>

  get(id: string): Promise<Project | null>

  getAll(): Promise<Project[]>

  delete(id: string): Promise<void>

  update(id: string, title : string, finalDate: Date): Promise<void>

  getSummary(): Promise<Summary>
}