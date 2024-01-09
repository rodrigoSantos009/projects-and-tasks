import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

export class CreateTaskController {
  constructor(
    private createTaskUseCase: CreateTaskUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, projectId, createdAt, finalDate } = req.body
    
    try {
      await this.createTaskUseCase.execute({
        title,
        projectId,
        createdAt,
        finalDate
      })
      return res.status(201).send()
    } catch(e: any) {
      return res.status(400).json({
        message: e.message || 'Unexpected error'
      })
    }
  }
}