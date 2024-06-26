import { AppointmentsUpdateManyWithoutPropertiesItemsInput } from "./AppointmentsUpdateManyWithoutPropertiesItemsInput";
import { Decimal } from "decimal.js";

export type PropertiesUpdateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutPropertiesItemsInput;
  name?: string | null;
  numberOfRooms?: Decimal;
  price?: number | null;
  status?: "Option1" | null;
};
