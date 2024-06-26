import { Clients as TClients } from "../api/clients/Clients";

export const CLIENTS_TITLE_FIELD = "firstName";

export const ClientsTitle = (record: TClients): string => {
  return record.firstName?.toString() || String(record.id);
};
