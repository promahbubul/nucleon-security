import DashboardLayout from "@layouts/DashboardLayout";
import Login from "@pages/Login";
import Overview from "@pages/Overview";
import { Routes } from "@shared/constants/routes.constants";
import Training from "@pages/Training";
import Events from "@pages/Events";
import Analyzes from "@pages/Analyzes";
import Policies from "@pages/Policies";
import Endpoints from "@pages/Endpoints";
import Vulnerabilities from "@pages/Vulnerabilities";
import Capacity from "@pages/Capacity";
import Inventories from "@pages/Inventories";
import Applications from "@pages/Applications";
import Accounts from "@pages/Accounts";
import EndpointDetails from "@pages/EndpointDetails";

export const RoutesConfig = [
  {
    path: Routes.dashboard,
    element: <DashboardLayout />,
    children: [
      { path: Routes.overview, element: <Overview /> },
      { path: Routes.training, element: <Training /> },
      { path: Routes.events, element: <Events /> },
      { path: Routes.analyzes, element: <Analyzes /> },
      { path: Routes.policies, element: <Policies /> },
      { path: Routes.endpoints, element: <Endpoints /> },
      { path: Routes.vulnerabilities, element: <Vulnerabilities /> },
      { path: Routes.capacity, element: <Capacity /> },
      { path: Routes.inventories, element: <Inventories /> },
      { path: Routes.applications, element: <Applications /> },
      { path: Routes.accounts, element: <Accounts /> },
      { path: Routes.endpointDetails, element: <EndpointDetails /> },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
];
