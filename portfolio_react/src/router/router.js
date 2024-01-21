import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";
import Contact from "../components/Footer/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "project/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
