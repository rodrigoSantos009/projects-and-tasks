import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import { Task } from "../../entities/Task";
import { ITaskRepository } from "../ITaskRepository";


export class PrismaTaskRepository implements ITaskRepository {
  constructor(
    private readonly prisma: PrismaClient
  ) {}

  async save(task: Task): Promise<void> {
    const today = dayjs().startOf('day').toDate()
    const finalDate = dayjs(task.finalDate).toDate()
    await this.prisma.task.create({
      data: {
        title: task.title,
        projectId: task.projectId,
        createdAt: today,
        finalDate: finalDate
      }
    })
  }

  async get(id: string): Promise<Task | null> {
    return await this.prisma.task.findUnique({
      where: {
        id
      }
    })
  }

  async getAll(): Promise<Task[]> {
    return await this.prisma.task.findMany()
  }

  async getByProjectId(projectId: string): Promise<Task[]> {
    return await this.prisma.task.findMany({
      where: {
        projectId
      },
    });
  }

  async taskToggle(id: string): Promise<void> {
    const task = await this.prisma.task.findUnique({
      where: {
        id
      }
    })
    if(task !== null) {
      if(task.finalizeTask) {
        task.finalizeTask = false
      } else {
        task.finalizeTask = true
      }
    }
    await this.prisma.task.update({
      where: {
        id
      },
      data: {
        finalizeTask: task?.finalizeTask
      }
    })  
  }

  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id
      } 
    })
  }
}