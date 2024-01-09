import { PrismaProjectRepository } from "../../../repositories/implementations/PrismaProjectsRepository";
import { CreateProjectController } from "./CreateProjectController";
import { CreateProjectUseCase } from "./CreateProjectProjectCase";
import { PrismaClient } from "@prisma/client"

const prismaClient = new PrismaClient()

const prismaProjectRepository = new PrismaProjectRepository(
  prismaClient
)

const createProjectUseCase = new CreateProjectUseCase(
  prismaProjectRepository
)

const createProjectController = new CreateProjectController(
  createProjectUseCase  
)

export { createProjectUseCase, createProjectController }