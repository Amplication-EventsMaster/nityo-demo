import { SortOrder } from "../../util/SortOrder";

export type AppointmentsOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
