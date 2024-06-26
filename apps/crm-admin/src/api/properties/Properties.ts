import { Appointments } from "../appointments/Appointments";

export type Properties = {
  address: string | null;
  appointmentsItems?: Array<Appointments>;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
