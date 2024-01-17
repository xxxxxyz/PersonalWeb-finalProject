import React from "react";

import HealthGoLandingPage from "../../assets/images/HealthGoLandingPage.png";
import BTLanding from "../../assets/images/B&TLanding.png";
import BrandCard from "../../assets/images/BrandCard.png";
import BrandingSuil from "../../assets/images/Branding_SuiL.png";

import Header from "../Header/Header";
import ProjectsList from "../ProjectsList/ProjectsList";

const projects = [
  {
    id: 1,
    name: "Project 1",
    category: "Web Design Concept",
    role: "UX",
    status: "Finished",
    intro:
      "Healthy Eating focuses on helping people who want to build their new eating habits with healthy food.",
    image: HealthGoLandingPage,
  },
  {
    id: 2,
    name: "Project 2",
    category: "Web Design Concept",
    role: "UX",
    status: "Finished",
    intro:
      "Healthy Eating focuses on helping people who want to build their new eating habits with healthy food.",
    image: BTLanding,
  },
  {
    id: 3,
    name: "Project 3",
    category: "Branding",
    role: "Designer",
    status: "Finished",
    image: BrandCard,
  },
  {
    id: 4,
    name: "Project 4",
    category: "Branding",
    role: "Designer",
    status: "Finished",
    image: BrandingSuil,
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <ProjectsList projects={projects} />
    </div>
  );
};

export default Home;
