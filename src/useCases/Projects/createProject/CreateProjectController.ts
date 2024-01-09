import { Request, Response } from "express";
import { CreateProjectUseCase } from "./CreateProjectProjectCase";

export class CreateProjectController {
  constructor(
    private createUserUseCase: CreateProjectUseCase
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { title, createdAt, finalDate } = req.body
    try {
      const project = await this.createUserUseCase.execute({
        title,
        createdAt,
        finalDate 
      })
      return res.status(201).json(project)
    } catch(e: any) {
      return res.status(400).json({
        message: e.message || 'Unexpected error'
      })
    }
  }
}