import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AppointmentsListRelationFilter } from "../appointments/AppointmentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertiesWhereInput = {
  address?: StringNullableFilter;
  appointmentsItems?: AppointmentsListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberOfRooms?: DecimalFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
