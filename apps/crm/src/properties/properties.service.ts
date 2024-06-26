import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PropertiesServiceBase } from "./base/properties.service.base";

@Injectable()
export class PropertiesService extends PropertiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
