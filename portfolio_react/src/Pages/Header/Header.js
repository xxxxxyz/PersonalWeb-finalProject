import React from "react";

const Header = () => {
  return (
    <header className="h-screen">
      <div data-aos="fade-left" data-aos-duration="1500">
        {/* banner section */}
        <div className="pt-12 md:pt-32 md:my-20">
          <div className="w-full text-4xl font-medium leading-relaxed md:w-[80%] md:text-7xl md:leading-tight">
            Hi, I'm Zoe,
          </div>
          <div className="w-full text-4xl leading-relaxed font-medium md:w-[80%] md:text-7xl md:leading-tight">
            Web Developer and Designer
          </div>
          <div className="w-full text-lg leading-relaxed my-8 md:w-[60%] md:text-xl">
            I am a dedicated designer working as a freelance focusing on digital
            material design. I love to learn new things related to design, and I
            join many design challenges as a daily practice. My goal is to be a
            skilled designer who can help ppl solve problems with great ideas.
          </div>
        </div>
        <div className="flex items-baseline flex-col justify-start md:flex-row">
          <a href="#projects-list">
            <button className="btn btn-outline px-16 text-lg mt-4 flex flex-row align-baseline uppercase">
              See Select Works
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 animate-bounce mt-[6px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
