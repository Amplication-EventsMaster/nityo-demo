import { Appointments } from "../appointments/Appointments";
import { Decimal } from "decimal.js";

export type Properties = {
  address: string | null;
  appointmentsItems?: Array<Appointments>;
  createdAt: Date;
  id: string;
  name: string | null;
  numberOfRooms: Decimal;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
