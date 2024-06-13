import App from "../App";
import Schools from "../pages/Schools";
import Partners from "../pages/Partners";
import Opportunities from "../pages/Opportunities";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch"

import { createBrowserRouter } from "react-router-dom";

 const routes = createBrowserRouter([

    {
        name: "App",
        path: "/",
        exact: true,
        element: <App />,
      },

    {
        name: "Schools",
        path: "/schools",
        exact: true,
        element: <Schools />,
      },

    {
        name: "Opportunities",
        path: "/opportunities",
        exact: true,
        element: <Opportunities />,
      },

    {
        name: "About",
        path: "/about",
        exact: true,
        element: <About />,
      },

    {
        name: "Partners",
        path: "/partners",
        exact: true,
        element: <Partners />,
      },

    {
        name: "NoMatch",
        path: "/noMatch",
        exact: true,
        element: <NoMatch />,
      },

])

export default routes

