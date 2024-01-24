import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Layout.css";

const Layout = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="block px-[4%]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
