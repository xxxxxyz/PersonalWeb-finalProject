import React from "react";
import { Link } from "react-router-dom";

const ProjectSection = ({ project }) => {
  const { category, id, image, intro, name } = project;
  if (category === "Web Design") {
    return (
      <div className="mb-20 mt-4 md:mb-48 md:mt-12">
        <Link
          to={`/project/${id}`}
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-in-out"
        >
          <img src={image} alt={name} className="rounded-md" />
        </Link>
        <div className="subtitle flex row justify-between pt-4">
          <div
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            {category}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
          >
            UI UX Design
          </div>
        </div>
        <div
          className="mt-4 md:mt-12 w-full mx-auto md:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="text-xl md:mb-8 leading-loose md:text-4xl md:leading-relaxed">
            {intro}
          </div>
          <Link
            to={`/project/${id}`}
            className="text-gray-500 underline cursor-pointer "
          >
            Read more
          </Link>
        </div>
        <div
          className="decoration w-full flex row justify-end align-baseline"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <div className="w-[60%] mt-16">
            <div className="h-[1px] w-full bg-current"></div>
          </div>
          <div className="text-7xl pl-6">{`0${id}`}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-20 small-project md:mt-0">
        <div>
          <div>
            <img
              src={image}
              alt={name}
              className="rounded-md max-h-[400px] md:pr-4"
              data-aos="fade-up"
              data-aos-duration="600"
            />
            <div className="pt-2">
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >{`${category} Design`}</div>
            </div>
          </div>
          <div
            className="w-full flex row justify-end align-baseline"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
          >
            <div className="w-[60%] mt-16">
              <div className="h-[1px] w-full bg-current"></div>
            </div>
            <div className="text-7xl pl-6">{`0${id}`}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSection;
