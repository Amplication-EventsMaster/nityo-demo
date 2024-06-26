import { ClientsWhereInput } from "./ClientsWhereInput";
import { ClientsOrderByInput } from "./ClientsOrderByInput";

export type ClientsFindManyArgs = {
  where?: ClientsWhereInput;
  orderBy?: Array<ClientsOrderByInput>;
  skip?: number;
  take?: number;
};
