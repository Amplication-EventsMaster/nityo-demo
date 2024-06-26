import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ClientsModuleBase } from "./base/clients.module.base";
import { ClientsService } from "./clients.service";
import { ClientsController } from "./clients.controller";
import { ClientsResolver } from "./clients.resolver";

@Module({
  imports: [ClientsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ClientsController],
  providers: [ClientsService, ClientsResolver],
  exports: [ClientsService],
})
export class ClientsModule {}
