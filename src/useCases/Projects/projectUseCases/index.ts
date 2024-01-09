import { PrismaClient } from "@prisma/client"
import { PrismaProjectRepository } from "../../../repositories/implementations/PrismaProjectsRepository"
import { ProjectController } from "./ProjectController"
import { ProjectUseCase } from "./ProjectUseCase"

const prismaClient = new PrismaClient()

const prismaProjectRepository = new PrismaProjectRepository(
  prismaClient  
)

const projectUseCase = new ProjectUseCase(
  prismaProjectRepository  
)

const projectController = new ProjectController(
  projectUseCase  
)

export { projectUseCase, projectController }  