import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AgentsModuleBase } from "./base/agents.module.base";
import { AgentsService } from "./agents.service";
import { AgentsController } from "./agents.controller";
import { AgentsResolver } from "./agents.resolver";

@Module({
  imports: [AgentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AgentsController],
  providers: [AgentsService, AgentsResolver],
  exports: [AgentsService],
})
export class AgentsModule {}
