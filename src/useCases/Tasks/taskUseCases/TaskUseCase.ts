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

  async getTaskByProjectId(projectId: string) {
    return await this.taskRepository.getByProjectId(projectId)
  }

  async taskToggle(id: string) {
    return await this.taskRepository.taskToggle(id)
  }

  async deleteTask(id: string) {
    return await this.taskRepository.delete(id)
  }
} 