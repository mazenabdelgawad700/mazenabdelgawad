import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "./DarkModeButton.css";

const DarkModeButton = () => {
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
    if (localStorage.getItem("theme") === "dark") setLight();
    else setDark();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setDefaultTheme = () => {
    const result = window.matchMedia("(prefers-color-scheme: dark)");
    if (result.matches) {
      setDark();
      setTheme("dark");
    } else {
      setLight();
      setTheme("light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute(
        "data-theme",
        localStorage.getItem("theme")
      );
    } else setDefaultTheme();
  }, [setDefaultTheme]);

  return (
    <div className="toggle-theme-wrapper">
      {theme === "light" ? (
        <span onClick={() => toggleTheme()}>
          <FaSun />
        </span>
      ) : (
        <span onClick={() => toggleTheme()}>
          <FaMoon />
        </span>
      )}
    </div>
  );
};

export default DarkModeButton;
