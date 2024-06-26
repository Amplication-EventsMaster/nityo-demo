/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Agents as PrismaAgents,
  Appointments as PrismaAppointments,
} from "@prisma/client";

export class AgentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AgentsCountArgs, "select">): Promise<number> {
    return this.prisma.agents.count(args);
  }

  async agentsItems(args: Prisma.AgentsFindManyArgs): Promise<PrismaAgents[]> {
    return this.prisma.agents.findMany(args);
  }
  async agents(
    args: Prisma.AgentsFindUniqueArgs
  ): Promise<PrismaAgents | null> {
    return this.prisma.agents.findUnique(args);
  }
  async createAgents(args: Prisma.AgentsCreateArgs): Promise<PrismaAgents> {
    return this.prisma.agents.create(args);
  }
  async updateAgents(args: Prisma.AgentsUpdateArgs): Promise<PrismaAgents> {
    return this.prisma.agents.update(args);
  }
  async deleteAgents(args: Prisma.AgentsDeleteArgs): Promise<PrismaAgents> {
    return this.prisma.agents.delete(args);
  }

  async findAppointmentsItems(
    parentId: string,
    args: Prisma.AppointmentsFindManyArgs
  ): Promise<PrismaAppointments[]> {
    return this.prisma.agents
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointmentsItems(args);
  }
}
