import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RoutesConfig } from "./config/routes.config";

const App = () => {
  const router = createBrowserRouter(RoutesConfig);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
