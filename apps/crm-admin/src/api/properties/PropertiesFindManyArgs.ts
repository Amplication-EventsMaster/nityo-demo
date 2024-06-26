import { PropertiesWhereInput } from "./PropertiesWhereInput";
import { PropertiesOrderByInput } from "./PropertiesOrderByInput";

export type PropertiesFindManyArgs = {
  where?: PropertiesWhereInput;
  orderBy?: Array<PropertiesOrderByInput>;
  skip?: number;
  take?: number;
};
