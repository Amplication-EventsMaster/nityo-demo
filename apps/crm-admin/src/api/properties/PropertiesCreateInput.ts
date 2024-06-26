import { AppointmentsCreateNestedManyWithoutPropertiesItemsInput } from "./AppointmentsCreateNestedManyWithoutPropertiesItemsInput";
import { Decimal } from "decimal.js";

export type PropertiesCreateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutPropertiesItemsInput;
  name?: string | null;
  numberOfRooms: Decimal;
  price?: number | null;
  status?: "Option1" | null;
};
