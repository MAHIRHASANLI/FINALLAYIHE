import Home from "../pages/Home"
import MainRoot from "../pages/MainRoot";
import Add from "../pages/Add";
import Detail from "../pages/Home/Detail";

export const ROUTES = [
  {
    path: "",
    element: <MainRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      }
    ],
  },
];
