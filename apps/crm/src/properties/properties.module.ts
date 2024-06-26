import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PropertiesModuleBase } from "./base/properties.module.base";
import { PropertiesService } from "./properties.service";
import { PropertiesController } from "./properties.controller";
import { PropertiesResolver } from "./properties.resolver";

@Module({
  imports: [PropertiesModuleBase, forwardRef(() => AuthModule)],
  controllers: [PropertiesController],
  providers: [PropertiesService, PropertiesResolver],
  exports: [PropertiesService],
})
export class PropertiesModule {}
