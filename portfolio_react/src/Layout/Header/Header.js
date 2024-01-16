import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Header = () => {
  return (
    <header>
      <div
        className=""
        data-aos="fade-in"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <Navbar />
        {/* banner section */}
        <div className="py-32 md:my-20">
          <div className="w-full text-4xl font-medium leading-relaxed md:w-[80%] md:text-7xl md:leading-tight">
            Hi, I'm Zoe,
          </div>
          <div className="w-full text-4xl leading-relaxed font-medium md:w-[80%] md:text-7xl md:leading-tight">
            Web Developer and Designer
          </div>
          <div className="w-full text-lg leading-relaxed my-8 md:w-[60%] md:text-xl ">
            I am a dedicated designer working as a freelance focusing on digital
            material design. I love to learn new things related to design, and I
            join many design challenges as a daily practice. My goal is to be a
            skilled designer who can help ppl solve problems with great ideas.
          </div>
          <button className="btn btn-outline px-16 text-lg">Contact me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
