import { ClientsWhereUniqueInput } from "./ClientsWhereUniqueInput";
import { ClientsUpdateInput } from "./ClientsUpdateInput";

export type UpdateClientsArgs = {
  where: ClientsWhereUniqueInput;
  data: ClientsUpdateInput;
};
