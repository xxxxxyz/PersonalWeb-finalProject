import React from "react";
import Contact from "./Contact/Contact";

const Footer = () => {
  return (
    <div>
      <div className="py-20 flex justify-end">
        <a
          className="uppercase text-7xl pl-6 font-medium text-gray-700"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="linear"
        >
          find me
        </a>
      </div>
      <div
        className="footer flex justify-between mb-4"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-easing="linear"
      >
        <p>Copyright©ZOEXIA</p>
        <p>
          <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">Instagram</a>
        </p>
        <p>
          <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">GitHub</a>
        </p>
        <p>
          <a href="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX">Email</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
