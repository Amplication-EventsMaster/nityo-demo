import { AppointmentsUpdateManyWithoutClientsItemsInput } from "./AppointmentsUpdateManyWithoutClientsItemsInput";

export type ClientsUpdateInput = {
  appointmentsItems?: AppointmentsUpdateManyWithoutClientsItemsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
