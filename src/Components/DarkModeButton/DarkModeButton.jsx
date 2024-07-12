import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./DarkModeButton.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const DarkModeButton = ({ setExpanded }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
    setTheme("dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
    setTheme("light");
  };

  const toggleTheme = () => {
    setExpanded(false);
    if (localStorage.getItem("theme") === "dark") setLight();
    else setDark();
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    }
  }, []);

  return (
    <div className="toggle-theme-wrapper">
      {theme === "light" ? (
        <FaSun onClick={() => toggleTheme()} />
      ) : (
        <FaMoon onClick={() => toggleTheme()} />
      )}
    </div>
  );
};

export default DarkModeButton;
