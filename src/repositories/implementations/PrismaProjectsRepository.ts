import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import { Project } from "../../entities/Project";
import { IProjectRepository } from "../IProjectRepository";

export interface Summary {
  id: string;
  completed: number;
  amount: number;
}[]

export class PrismaProjectRepository implements IProjectRepository {
  constructor(
    private readonly prisma: PrismaClient
  ) {}

  async save(project: Project): Promise<void> {
    const today = dayjs().startOf('day').toDate()
    const finalDate = dayjs(project.finalDate).toDate()
    await this.prisma.project.create({
      data: {
        title: project.title,
        createdAt: today,
        finalDate: finalDate
      }
    })
  }

  async get(id: string): Promise<Project | null> {
    return await this.prisma.project.findUnique({
      where: {
        id
      },
      include: {
        task: true
      }
    })
  }

  async getAll(): Promise<Project[]> {
    return await this.prisma.project.findMany({
      include: {
        task: true
      }
    })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.project.delete({
      where: {
        id
      }
    })
  }

  async update(id: string, title: string, finalDate: Date ): Promise<void> {
    await this.prisma.project.update({
      where: {
        id
      },
      data: {
        title: title,
        finalDate
      }
    })
  }

  async getSummary(): Promise<Summary> {
    const summary = await this.prisma.$queryRaw<Summary>`
      select *,
        (select cast(count(*) as float) from tasks
          where finalizeTask = true
          and p.id = projectId
        ) as completed,
        (select cast(count(*) as float) from tasks
          where p.id = projectId
        ) as amount
      from projects p
    `;

    return summary;
  }
}