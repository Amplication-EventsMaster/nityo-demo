import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AgentsList } from "./agents/AgentsList";
import { AgentsCreate } from "./agents/AgentsCreate";
import { AgentsEdit } from "./agents/AgentsEdit";
import { AgentsShow } from "./agents/AgentsShow";
import { ClientsList } from "./clients/ClientsList";
import { ClientsCreate } from "./clients/ClientsCreate";
import { ClientsEdit } from "./clients/ClientsEdit";
import { ClientsShow } from "./clients/ClientsShow";
import { AppointmentsList } from "./appointments/AppointmentsList";
import { AppointmentsCreate } from "./appointments/AppointmentsCreate";
import { AppointmentsEdit } from "./appointments/AppointmentsEdit";
import { AppointmentsShow } from "./appointments/AppointmentsShow";
import { PropertiesList } from "./properties/PropertiesList";
import { PropertiesCreate } from "./properties/PropertiesCreate";
import { PropertiesEdit } from "./properties/PropertiesEdit";
import { PropertiesShow } from "./properties/PropertiesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Agents"
          list={AgentsList}
          edit={AgentsEdit}
          create={AgentsCreate}
          show={AgentsShow}
        />
        <Resource
          name="Clients"
          list={ClientsList}
          edit={ClientsEdit}
          create={ClientsCreate}
          show={ClientsShow}
        />
        <Resource
          name="Appointments"
          list={AppointmentsList}
          edit={AppointmentsEdit}
          create={AppointmentsCreate}
          show={AppointmentsShow}
        />
        <Resource
          name="Properties"
          list={PropertiesList}
          edit={PropertiesEdit}
          create={PropertiesCreate}
          show={PropertiesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
