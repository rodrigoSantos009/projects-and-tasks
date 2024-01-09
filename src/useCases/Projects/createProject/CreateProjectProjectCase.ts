import { Project } from "../../../entities/Project";
import { IProjectRepository } from "../../../repositories/IProjectRepository";
import { ICreateProjectRequestDTO } from "./CreateProjectDTO";

export class CreateProjectUseCase {
  constructor(
    private projectsRepository: IProjectRepository
  ) {}

  async execute(data: ICreateProjectRequestDTO) {
    const project = new Project(
      data.title,
      data.createdAt,
      data.finalDate  
    )
    await this.projectsRepository.save(project)
  }
}