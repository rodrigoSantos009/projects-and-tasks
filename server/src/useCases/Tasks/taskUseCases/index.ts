import { PrismaClient } from "@prisma/client";
import { PrismaTaskRepository } from "../../../repositories/implementations/PrismaTasksRepository";
import { TaskController } from "./TaskController";
import { TaskUseCase } from "./TaskUseCase";


const prismaClient = new PrismaClient()

const prismaTaskRepository = new PrismaTaskRepository(
  prismaClient  
)

const taskUseCase = new TaskUseCase(
  prismaTaskRepository  
)

const taskController = new TaskController(
  taskUseCase  
)

export { taskController, taskUseCase }