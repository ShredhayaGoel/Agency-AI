import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";

const App = () => {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );
  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} settheme={settheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <h1 className={`text-gray-700 dark:text-white sm:text-sm`}>
        Hello, World!
      </h1>
    </div>
  );
};

export default App;
