import { AppointmentsCreateNestedManyWithoutClientsItemsInput } from "./AppointmentsCreateNestedManyWithoutClientsItemsInput";

export type ClientsCreateInput = {
  appointmentsItems?: AppointmentsCreateNestedManyWithoutClientsItemsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
