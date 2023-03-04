import { Request, Response } from "express";
import { ProjectUseCase } from "./ProjectUseCase";

export class ProjectController {
  constructor(
    private projectUseCase: ProjectUseCase
  ) {}

  async getAllProjects(res: Response): Promise<Response> {
    try {
      const projects = await this.projectUseCase.getAll()
      projects.map(project => {
        console.log(project)
      })
      return res.status(200).json(projects)
    } catch(e) {
      return res.status(400).json()
    }
  }

  async getProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.projectUseCase.getProject(id)
      return res.status(201).send()
    } catch(e) {
      return res.status(400).json()
    }
  }

  async deleteProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.projectUseCase.deleteProject(id)
      return res.status(202).send()
    } catch(e) {
      return res.status(400).json()
    }
  }

  async updateProject(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { title, finalDate } = req.body
    try {
      await this.projectUseCase.updateProject(id, title, finalDate)
      return res.status(201).send()
    } catch(e) {
      return res.status(400).json()
    }
  }

  async completeTasks(res: Response): Promise<Response> {
    try{
      const tasks = await this.projectUseCase.getAll()
      tasks.map(task => {
        console.log(task)
      })
      return res.status(201).json(tasks)
    }catch(e) {
      return res.status(400).json()
    }
  }
}