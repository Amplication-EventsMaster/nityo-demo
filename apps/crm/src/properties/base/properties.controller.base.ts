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
import { PropertiesService } from "../properties.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PropertiesCreateInput } from "./PropertiesCreateInput";
import { Properties } from "./Properties";
import { PropertiesFindManyArgs } from "./PropertiesFindManyArgs";
import { PropertiesWhereUniqueInput } from "./PropertiesWhereUniqueInput";
import { PropertiesUpdateInput } from "./PropertiesUpdateInput";
import { AppointmentsFindManyArgs } from "../../appointments/base/AppointmentsFindManyArgs";
import { Appointments } from "../../appointments/base/Appointments";
import { AppointmentsWhereUniqueInput } from "../../appointments/base/AppointmentsWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PropertiesControllerBase {
  constructor(
    protected readonly service: PropertiesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Properties })
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createProperties(
    @common.Body() data: PropertiesCreateInput
  ): Promise<Properties> {
    return await this.service.createProperties({
      data: data,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Properties] })
  @ApiNestedQuery(PropertiesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async propertiesItems(@common.Req() request: Request): Promise<Properties[]> {
    const args = plainToClass(PropertiesFindManyArgs, request.query);
    return this.service.propertiesItems({
      ...args,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        price: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Properties })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async properties(
    @common.Param() params: PropertiesWhereUniqueInput
  ): Promise<Properties | null> {
    const result = await this.service.properties({
      where: params,
      select: {
        address: true,
        createdAt: true,
        id: true,
        name: true,
        price: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Properties })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateProperties(
    @common.Param() params: PropertiesWhereUniqueInput,
    @common.Body() data: PropertiesUpdateInput
  ): Promise<Properties | null> {
    try {
      return await this.service.updateProperties({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          price: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Properties })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteProperties(
    @common.Param() params: PropertiesWhereUniqueInput
  ): Promise<Properties | null> {
    try {
      return await this.service.deleteProperties({
        where: params,
        select: {
          address: true,
          createdAt: true,
          id: true,
          name: true,
          price: true,
          status: true,
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
    @common.Param() params: PropertiesWhereUniqueInput
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
    resource: "Properties",
    action: "update",
    possession: "any",
  })
  async connectAppointmentsItems(
    @common.Param() params: PropertiesWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        connect: body,
      },
    };
    await this.service.updateProperties({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointmentsItems")
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "update",
    possession: "any",
  })
  async updateAppointmentsItems(
    @common.Param() params: PropertiesWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        set: body,
      },
    };
    await this.service.updateProperties({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointmentsItems")
  @nestAccessControl.UseRoles({
    resource: "Properties",
    action: "update",
    possession: "any",
  })
  async disconnectAppointmentsItems(
    @common.Param() params: PropertiesWhereUniqueInput,
    @common.Body() body: AppointmentsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointmentsItems: {
        disconnect: body,
      },
    };
    await this.service.updateProperties({
      where: params,
      data,
      select: { id: true },
    });
  }
}