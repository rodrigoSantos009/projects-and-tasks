import { PrismaClient } from "@prisma/client";
import { PrismaTaskRepository } from "../../../repositories/implementations/PrismaTasksRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const prismaClient = new PrismaClient()

const prismaTasksRepository = new PrismaTaskRepository(
  prismaClient  
)

const createTaskUseCase = new CreateTaskUseCase(
  prismaTasksRepository  
)

const createTaskController = new CreateTaskController(
  createTaskUseCase  
)

export { createTaskUseCase, createTaskController }