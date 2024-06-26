import { AppointmentsUpdateManyWithoutPropertiesItemsInput } from "./AppointmentsUpdateManyWithoutPropertiesItemsInput";

export type PropertiesUpdateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsUpdateManyWithoutPropertiesItemsInput;
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
