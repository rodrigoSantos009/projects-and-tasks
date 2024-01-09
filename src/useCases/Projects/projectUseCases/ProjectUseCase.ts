import { IProjectRepository } from "../../../repositories/IProjectRepository";

export class ProjectUseCase {
  constructor(private projectsRepository: IProjectRepository) {}

  async getAll() {
    return await this.projectsRepository.getAll();
  }

  async getProject(id: string) {
    return await this.projectsRepository.get(id);
  }

  async deleteProject(id: string) {
    return await this.projectsRepository.delete(id);
  }

  async updateProject(id: string, title: string, finalDate: Date) {
    return await this.projectsRepository.update(id, title, finalDate);
  }

  async getSummary() {
    const summary = await this.projectsRepository.getSummary();
    
    return summary
  }
}