import { Agents } from "../agents/Agents";
import { Clients } from "../clients/Clients";
import { Properties } from "../properties/Properties";

export type Appointments = {
  agent?: Agents | null;
  client?: Clients | null;
  createdAt: Date;
  dateTime: Date | null;
  id: string;
  note: string | null;
  property?: Properties | null;
  updatedAt: Date;
};
