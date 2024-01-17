import React from "react";

const ProjectSection = ({ project }) => {
  const { category, id, image, intro, name } = project;
  if (category === "Web Design Concept") {
    return (
      <div className="mb-48 mt-16">
        <a
          href=""
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <img src={image} alt={name} className="rounded-md" />
        </a>
        <div
          className="subtitle flex row justify-between pt-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <div>{category}</div>
          <div>UI UX Design</div>
        </div>
        <div
          className="pt-12 w-full mx-auto md:w-[50%]"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <div className="text-xl mb-6 leading-loose md:text-4xl md:leading-relaxed">
            {intro}
          </div>
          <a href="/" className="text-gray-500 underline cursor-pointer ">
            Read more
          </a>
        </div>
        <div
          className="decoration w-full flex row justify-end align-baseline"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <div className="w-[60%] mt-16">
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>
          <div className="text-7xl pl-6">{`0${id}`}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="small-project">
        <div
          className="max-w-[720px]"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          <a href="">
            <img src={image} alt={name} className="rounded-md" />
            <div className="pt-2">
              <div>{`${category} Design`}</div>
            </div>
          </a>
          <div
            className="w-full flex row justify-end align-baseline"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="linear"
          >
            <div className="w-[60%] mt-16">
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>
            <div className="text-7xl pl-6">{`0${id}`}</div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProjectSection;
