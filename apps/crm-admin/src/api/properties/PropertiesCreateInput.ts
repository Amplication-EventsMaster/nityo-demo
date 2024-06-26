import { AppointmentsCreateNestedManyWithoutPropertiesItemsInput } from "./AppointmentsCreateNestedManyWithoutPropertiesItemsInput";

export type PropertiesCreateInput = {
  address?: string | null;
  appointmentsItems?: AppointmentsCreateNestedManyWithoutPropertiesItemsInput;
  name?: string | null;
  price?: number | null;
  status?: "Option1" | null;
};
