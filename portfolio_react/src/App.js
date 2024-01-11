import * as React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello World</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
