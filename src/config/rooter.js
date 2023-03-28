/* eslint-disable react/react-in-jsx-scope */
import { useRoutes } from "react-router-dom";
import Login from "../page/login";
import Dashboard from "../page/dashboard";
import ListCar from "../page/listCar";
import AddNewCar from "../page/addNewCar";
import EditCar from "../page/editCar";
import { ModalLogin } from "../component/modalLogin";

const publicRoutes = (props) => [
  { index: true, path: "/", element: <Login {...props} title="Login" /> },
  { index: true, path: "/*", element: <>ERROR</> },
];

const privateRoutes = (props) => [
  {
    index: true,
    path: "/dashboard",
    element: <Dashboard {...props} title="Dashboard" />,
  },
  {
    index: true,
    path: "/list-car",
    element: <ListCar {...props} title="List Car" />,
  },
  {
    index: true,
    path: "/add-new-car",
    element: <AddNewCar {...props} title="Add Car" />,
  },
  {
    index: true,
    path: "/edit-car/:id",
    element: <EditCar {...props} title="Edit Car" />,
  },
  { index: true, path: "/*", element: <ModalLogin {...props} title="error" /> },
];

export const AppPublicRoutes = (props) => {
  const routers = publicRoutes(props);
  let routes = useRoutes(routers);
  return routes;
};
export const AppPrivateRoutes = (props) => {
  const routers = privateRoutes(props);
  let routes = useRoutes(routers);
  return routes;
};
