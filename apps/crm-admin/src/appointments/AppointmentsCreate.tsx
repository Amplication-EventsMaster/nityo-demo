import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { AgentsTitle } from "../agents/AgentsTitle";
import { ClientsTitle } from "../clients/ClientsTitle";
import { PropertiesTitle } from "../properties/PropertiesTitle";

export const AppointmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="agent.id" reference="Agents" label="Agent">
          <SelectInput optionText={AgentsTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Clients" label="Client">
          <SelectInput optionText={ClientsTitle} />
        </ReferenceInput>
        <DateTimeInput label="DateTime" source="dateTime" />
        <TextInput label="Note" multiline source="note" />
        <ReferenceInput
          source="property.id"
          reference="Properties"
          label="Property"
        >
          <SelectInput optionText={PropertiesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
