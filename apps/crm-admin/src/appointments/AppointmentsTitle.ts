import { Appointments as TAppointments } from "../api/appointments/Appointments";

export const APPOINTMENTS_TITLE_FIELD = "id";

export const AppointmentsTitle = (record: TAppointments): string => {
  return record.id?.toString() || String(record.id);
};
