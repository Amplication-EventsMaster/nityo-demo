import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { AGENTS_TITLE_FIELD } from "../agents/AgentsTitle";
import { CLIENTS_TITLE_FIELD } from "../clients/ClientsTitle";
import { PROPERTIES_TITLE_FIELD } from "../properties/PropertiesTitle";

export const AppointmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Agent" source="agents.id" reference="Agents">
          <TextField source={AGENTS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Client" source="clients.id" reference="Clients">
          <TextField source={CLIENTS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateTime" source="dateTime" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="Property"
          source="properties.id"
          reference="Properties"
        >
          <TextField source={PROPERTIES_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
