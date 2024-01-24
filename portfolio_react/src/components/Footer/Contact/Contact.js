import React from "react";

const Contact = () => {
  return (
    <div className="">
      {/* BreadCrumbs */}
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      {/* contact section  */}
      <div className="flex flex-col md:flex-row md:h-svh items-center">
        <div className="flex flex-col md:mr-40">
          <h2 className="text-4xl mb-8 md:text-6xl md:mb-20">
            Let's collaborate
          </h2>
          <div className="text-xl">Melbourne, Australia</div>
        </div>
        <div className="mt-8 md:mt-16">
          <div className="text-2xl pb-12">Say hello</div>
          <ul>
            <li>Email</li>
            <li>Github</li>
            <li>Linkedin</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
