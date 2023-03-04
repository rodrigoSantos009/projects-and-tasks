import { Request, Response } from "express";
import { TaskUseCase } from "./TaskUseCase";

export class TaskController {
  constructor(
    private taskUseCase: TaskUseCase
  ) {}

  async getTask(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.taskUseCase.get(id)
      return res.status(200).send()
    } catch(e: any) {
      return res.status(400).json()
    }
  }

  async getAllTasks(req: Request, res: Response): Promise<Response> {
    try{
      const tasks = await this.taskUseCase.getAllTasks()
      return res.status(200).json(tasks)
    } catch(e: any) {
      return  res.status(400).json()
    }
  }
  async taskToggle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.taskUseCase.taskToggle(id)
      return res.status(201).send()
    } catch(e: any) {
      return res.status(400).json()
    }
  }

  async deleteTask(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.taskUseCase.deleteTask(id)
      return res.status(200).send()
    } catch(e: any) {
      return res.status(400).json()
    }
  }
}