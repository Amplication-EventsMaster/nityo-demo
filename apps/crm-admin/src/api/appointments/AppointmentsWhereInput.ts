import { AgentsWhereUniqueInput } from "../agents/AgentsWhereUniqueInput";
import { ClientsWhereUniqueInput } from "../clients/ClientsWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertiesWhereUniqueInput } from "../properties/PropertiesWhereUniqueInput";

export type AppointmentsWhereInput = {
  agent?: AgentsWhereUniqueInput;
  client?: ClientsWhereUniqueInput;
  dateTime?: DateTimeNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  property?: PropertiesWhereUniqueInput;
};
