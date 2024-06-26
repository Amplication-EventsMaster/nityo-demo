import { AppointmentsUpdateManyWithoutAgentsItemsInput } from "./AppointmentsUpdateManyWithoutAgentsItemsInput";

export type AgentsUpdateInput = {
  appointmentsItems?: AppointmentsUpdateManyWithoutAgentsItemsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
