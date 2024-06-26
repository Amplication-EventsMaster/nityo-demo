import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertiesWhereInput = {
  address?: StringNullableFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
