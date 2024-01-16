import * as React from "react";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Layout from "./Layout/Layout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
