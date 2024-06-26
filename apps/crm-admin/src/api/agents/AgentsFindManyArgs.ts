import { AgentsWhereInput } from "./AgentsWhereInput";
import { AgentsOrderByInput } from "./AgentsOrderByInput";

export type AgentsFindManyArgs = {
  where?: AgentsWhereInput;
  orderBy?: Array<AgentsOrderByInput>;
  skip?: number;
  take?: number;
};
