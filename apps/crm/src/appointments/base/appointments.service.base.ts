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
  Appointments as PrismaAppointments,
  Agents as PrismaAgents,
  Clients as PrismaClients,
  Properties as PrismaProperties,
} from "@prisma/client";

export class AppointmentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AppointmentsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.appointments.count(args);
  }

  async appointmentsItems(
    args: Prisma.AppointmentsFindManyArgs
  ): Promise<PrismaAppointments[]> {
    return this.prisma.appointments.findMany(args);
  }
  async appointments(
    args: Prisma.AppointmentsFindUniqueArgs
  ): Promise<PrismaAppointments | null> {
    return this.prisma.appointments.findUnique(args);
  }
  async createAppointments(
    args: Prisma.AppointmentsCreateArgs
  ): Promise<PrismaAppointments> {
    return this.prisma.appointments.create(args);
  }
  async updateAppointments(
    args: Prisma.AppointmentsUpdateArgs
  ): Promise<PrismaAppointments> {
    return this.prisma.appointments.update(args);
  }
  async deleteAppointments(
    args: Prisma.AppointmentsDeleteArgs
  ): Promise<PrismaAppointments> {
    return this.prisma.appointments.delete(args);
  }

  async getAgent(parentId: string): Promise<PrismaAgents | null> {
    return this.prisma.appointments
      .findUnique({
        where: { id: parentId },
      })
      .agent();
  }

  async getClient(parentId: string): Promise<PrismaClients | null> {
    return this.prisma.appointments
      .findUnique({
        where: { id: parentId },
      })
      .client();
  }

  async getProperty(parentId: string): Promise<PrismaProperties | null> {
    return this.prisma.appointments
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }
}
