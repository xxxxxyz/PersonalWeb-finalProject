import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] items-center flex uppercase">
      <div className="container">
        <div className="flex items-center justify-between ">
          {/* logo */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-xl">Zoe XIA</span>
          </div>
          {/* nav link */}
          <div className="flex items-center gap-4">
            <ul className="flex">
              <li className="px-4">Projects</li>
              <li className="px-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
