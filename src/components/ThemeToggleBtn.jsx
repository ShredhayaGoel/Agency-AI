import React, { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, settheme }) => {
  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    settheme(theme || (prefersDarkScheme ? "dark" : "light"));
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => settheme("light")}
            src={assets.sun_icon}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full "
            alt="Sun"
          />
        ) : (
          <img
            src={assets.moon_icon}
            onClick={() => settheme("dark")}
            className="size-8.5 p-1.5 border border-gray-500 rounded-full "
            alt="Moon"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
