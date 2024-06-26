/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AgentsService } from "../agents.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AgentsCreateInput } from "./AgentsCreateInput";
import { Agents } from "./Agents";
import { AgentsFindManyArgs } from "./AgentsFindManyArgs";
import { AgentsWhereUniqueInput } from "./AgentsWhereUniqueInput";
import { AgentsUpdateInput } from "./AgentsUpdateInput";
import { AppointmentsFindManyArgs } from "../../appointments/base/AppointmentsFindManyArgs";
import { Appointments } from "../../appointments/base/Appointments";
import { AppointmentsWhereUniqueInput } from "../../appointments/base/AppointmentsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AgentsControllerBase {
  constructor(
    protected readonly service: AgentsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Agents })
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAgents(@common.Body() data: AgentsCreateInput): Promise<Agents> {
    return await this.service.createAgents({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Agents] })
  @ApiNestedQuery(AgentsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agentsItems(@common.Req() request: Request): Promise<Agents[]> {
    const args = plainToClass(AgentsFindManyArgs, request.query);
    return this.service.agentsItems({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Agents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async agents(
    @common.Param() params: AgentsWhereUniqueInput
  ): Promise<Agents | null> {
    const result = await this.service.agents({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Agents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAgents(
    @common.Param() params: AgentsWhereUniqueInput,
    @common.Body() data: AgentsUpdateInput
  ): Promise<Agents | null> {
    try {
      return await this.service.updateAgents({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Agents })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAgents(
    @common.Param() params: AgentsWhereUniqueInput
  ): Promise<Agents | null> {
    try {
      return await this.service.deleteAgents({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/appointmentsItems")
  @ApiNestedQuery(AppointmentsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Appointments",
    action: "read",
    possession: "any",
  })
  async findAppointmentsItems(
    @common.Req() request: Request,
    @common.Param() params: AgentsWhereUniqueInput
  ): Promise<Appointments[]> {
    const query = plainToClass(AppointmentsFindManyArgs, request.query);
    const results = await this.service.findAppointmentsItems(params.id, {
      ...query,
      select: {
        agent: {
          select: {
            id: true,
          },
        },

        client: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        dateTime: true,
        id: true,
        note: true,

        property: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointmentsItems")
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "update",
    possession: "any",
  })
  async connectAppointmentsItems(
    @common.Param() params: AgentsWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        connect: body,
      },
    };
    await this.service.updateAgents({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointmentsItems")
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "update",
    possession: "any",
  })
  async updateAppointmentsItems(
    @common.Param() params: AgentsWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        set: body,
      },
    };
    await this.service.updateAgents({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointmentsItems")
  @nestAccessControl.UseRoles({
    resource: "Agents",
    action: "update",
    possession: "any",
  })
  async disconnectAppointmentsItems(
    @common.Param() params: AgentsWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        disconnect: body,
      },
    };
    await this.service.updateAgents({
      where: params,
      data,
      select: { id: true },
    });
  }
}
