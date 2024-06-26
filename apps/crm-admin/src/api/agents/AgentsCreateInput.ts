import { AppointmentsCreateNestedManyWithoutAgentsItemsInput } from "./AppointmentsCreateNestedManyWithoutAgentsItemsInput";

export type AgentsCreateInput = {
  appointmentsItems?: AppointmentsCreateNestedManyWithoutAgentsItemsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
