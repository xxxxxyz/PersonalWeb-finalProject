import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between uppercase">
      {/* logo */}
      <div className="flex items-center gap-2">
        <span className="font-semibold text-xl">Zoe XIA</span>
      </div>
      {/* nav link */}
      <div className="flex items-center text-m">
        <ul className="hidden md:flex">
          <li className="ml-6 hover:underline">Projects</li>
          <li className="ml-6 hover:underline">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
