import React from "react";
import Contact from "./Contact/Contact";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
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
      <div className="footer flex justify-between mb-4">
        <p>Copyright©ZOEXIA</p>
        <p>
          <a
            href="XXX"
            className="font-bold uppercase underline flex justify-between items-end"
            onClick={scrollToTop}
          >
            Back to Top
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </p>
        <p>
          <a href="https://github.com/xxxxxyz">GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
