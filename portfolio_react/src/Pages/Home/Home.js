import React from "react";
import projects from "../../mocks/mockData";

import Header from "../Header/Header";
import ProjectsList from "../ProjectsList/ProjectsList";

const Home = () => {
  return (
    <div>
      <Header />
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Home;
