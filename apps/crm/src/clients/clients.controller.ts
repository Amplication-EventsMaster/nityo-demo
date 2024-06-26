import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ClientsService } from "./clients.service";
import { ClientsControllerBase } from "./base/clients.controller.base";

@swagger.ApiTags("clients")
@common.Controller("clients")
export class ClientsController extends ClientsControllerBase {
  constructor(
    protected readonly service: ClientsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
