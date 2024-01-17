import React from "react";
import ProjectSection from "./ProjectSection";

const ProjectsList = ({ projects }) => {
  const groupProjects = Object.groupBy(projects, ({ role }) => role);
  const uxProjects = groupProjects.UX;
  const designProjects = groupProjects.Designer;
  return (
    <div id="projects-list">
      <div
        className="flex flex-row justify-between"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <div className="uppercase font-medium underline underline-offset-2">
          Select works
        </div>
        <div className="text-xs text-gray-500 uppercase">
          Development | Design
        </div>
      </div>
      <div>
        {uxProjects.map((uxProject) => {
          return <ProjectSection key={uxProject.id} project={uxProject} />;
        })}
      </div>

      <div
        className="flex row justify-between w-full mb-16 mt-32"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <div className="uppercase font-medium underline underline-offset-2">
          Something Different
        </div>
        <div class="uppercase underline underline-offset-2 flex justify-end">
          <span>Find more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-between mb-48 mt-16">
        {designProjects.map((designProject) => {
          return (
            <ProjectSection key={designProject.id} project={designProject} />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsList;
