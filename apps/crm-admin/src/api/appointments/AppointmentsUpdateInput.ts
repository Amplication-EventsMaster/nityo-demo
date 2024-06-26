import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AppointmentsUpdateInput = {
  agent?: AgentsWhereUniqueInput | null;
  client?: ClientsWhereUniqueInput | null;
  dateTime?: Date | null;
  note?: string | null;
  property?: PropertiesWhereUniqueInput | null;
};
