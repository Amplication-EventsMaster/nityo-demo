import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgentsServiceBase } from "./base/agents.service.base";

@Injectable()
export class AgentsService extends AgentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
