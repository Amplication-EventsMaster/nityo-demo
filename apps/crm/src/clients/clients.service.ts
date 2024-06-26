import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientsServiceBase } from "./base/clients.service.base";

@Injectable()
export class ClientsService extends ClientsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
