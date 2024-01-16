import React from "react";

import Header from "./Header/Header";
import ProjectsList from "./ProjectsList/ProjectsList";
import Footer from "../components/Footer/Footer";
import HealthGoLandingPage from "../assets/images/HealthGoLandingPage.png";
import BTLanding from "../assets/images/B&TLanding.png";
import BrandCard from "../assets/images/BrandCard.png";
import BrandingSuil from "../assets/images/Branding_SuiL copy.png";

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

const Layout = () => {
  return (
    <div className="block mx-[4%] mt-[20px]">
      <Header />
      <ProjectsList projects={projects} />
      <Footer />
    </div>
  );
};

export default Layout;
