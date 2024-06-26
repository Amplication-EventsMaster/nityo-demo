import { Properties as TProperties } from "../api/properties/Properties";

export const PROPERTIES_TITLE_FIELD = "name";

export const PropertiesTitle = (record: TProperties): string => {
  return record.name?.toString() || String(record.id);
};
