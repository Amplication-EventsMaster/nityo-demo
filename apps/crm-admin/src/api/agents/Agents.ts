import { Appointments } from "../appointments/Appointments";

export type Agents = {
  appointmentsItems?: Array<Appointments>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
