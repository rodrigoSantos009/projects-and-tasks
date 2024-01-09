import { Task } from "../../../entities/Task";
import { ITaskRepository } from "../../../repositories/ITaskRepository";
import { ICreateTaskRequestDTO } from "./CreateTaskDTO";

export class CreateTaskUseCase {
  constructor(
    private taskRepository: ITaskRepository
  ) {}

  async execute(data: ICreateTaskRequestDTO) {
    const task = new Task(
      data.title,
      data.projectId,
      data.createdAt,
      data.finalDate  
    )
    await this.taskRepository.save(task)
  }
}