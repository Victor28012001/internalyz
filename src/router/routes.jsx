import App from "../App";
import Schools from "../pages/Schools";
import Partners from "../pages/Partners";
import Opportunities from "../pages/Opportunities";
import About from "../pages/About";
import NoMatch from "../pages/NoMatch";



import Signup from "../pages/auth/Signup"



import Agents from "../pages/dashboard/Agents"
import Contacts from "../pages/dashboard/Contacts"
import Dashboard from "../pages/dashboard/Dashboard"
import Inbox from "../pages/dashboard/Inbox"
import Logout from "../pages/dashboard/Agents"
import Settings from "../pages/dashboard/Settings"
import SettingsItem from "../pages/dashboard/SettingsItem"



import Calendars from "../pages/calendar/Calendar";
import Projects from "../pages/projects/Projects";
import Teams from "../pages/teams/Teams";

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
        path: "/*",
        exact: false,
        element: <NoMatch />,
      },



      
    {
      name: "Signup",
      path: "/signup",
      exact: true,
      element: <Signup />,
    },



      
    {
      name: "Agents",
      path: "/agents",
      exact: true,
      element: <Agents />,
    },
    {
      name: "Contacts",
      path: "/contacts",
      exact: true,
      element: <Contacts />,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      exact: true,
      element: <Dashboard />,
    },
    {
      name: "Inbox",
      path: "/inbox",
      exact: true,
      element: <Inbox />,
    },
    {
      name: "Logout",
      path: "/logout",
      exact: true,
      element: <Logout />,
    },
    {
      name: "Settings",
      path: "/settings",
      exact: true,
      element: <Settings />,
    },
    {
      name: "SettingsItem",
      path: "/settingsItem",
      exact: true,
      element: <SettingsItem />,
    },



    {
      name: "Calendar",
      path: "/calendar",
      exact: true,
      element: <Calendars />,
    },

    {
      name: "Projects",
      path: "/projects",
      exact: true,
      element: <Projects />,
    },

    {
      name: "Teams",
      path: "/teams",
      exact: true,
      element: <Teams />,
    },
])

export default routes

