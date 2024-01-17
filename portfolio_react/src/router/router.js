import React from "react";
import { createBrowserRouter } from "react-router-dom";

import ProjectDetail from "../Pages/ProjectDetail/ProjectDetail";
import Layout from "../Pages/Layout/Layout";
import Home from "../Pages/Home/Home";

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
        path: "project_detail",
        element: <ProjectDetail />,
      },
    ],
  },
]);

export default router;
