import { ITaskRepository } from "../../../repositories/ITaskRepository";

export class TaskUseCase {
  constructor(
    private taskRepository: ITaskRepository
  ){}

  async get(id: string) {
    return await this.taskRepository.get(id)
  }

  async getAllTasks() {
    return await this.taskRepository.getAll()
  }

  async taskToggle(id: string) {
    return await this.taskRepository.get(id)
  }

  async deleteTask(id: string) {
    return await this.taskRepository.delete(id)
  }
} 