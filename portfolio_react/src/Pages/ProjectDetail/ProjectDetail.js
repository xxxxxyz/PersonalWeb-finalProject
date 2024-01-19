import React from "react";
import projects from "../../mocks/mockData";
import { useParams } from "react-router-dom";

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId, 10));
  return (
    <div>
      {/* BreadCrumbs */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">{project.name}</a>
          </li>
        </ul>
      </div>

      <div className="my-32 md:flex md:row md:justify-between">
        <div
          className="uppercase text-6xl font-semibold underline-offset-2 mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          {project.category}
        </div>
        <div className="w-full md:w-[50%]" data-aos="fade-up">
          <p className="font-medium text-xl uppercase">Intro</p>
          <br />
          <p className="font-light text-xl leading-9">{project.intro}</p>
        </div>
      </div>
      <div
        className="px-10 md:px-20 py-32"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <video class="w-full" controls>
          <source src={project.source} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
      <div
        className="px-10 md:px-20 mb-32"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <div>
          <a href="">
            <span className="uppercase font-medium text-2xl underline">
              contact me
            </span>
          </a>
          <span className="ml-4">for more project details.</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
