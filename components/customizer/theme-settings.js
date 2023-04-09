import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import config from "./config.json";

const ThemeSettings = () => {
  const [themeLayout, setThemeLayout] = useState(false);
  useEffect(() => {
    if (config.config.layout_version && config.config.layout_type) {
      const bodyClass = document.body.classList
      document.body.className = `${bodyClass} ${config.config.layout_version}  ${config.config.layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty(
        "--theme-deafult",
        localStorage.getItem("color")
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (process.browser) {
      if (document.documentElement.scrollTop > 600) {
        document.querySelector(".tap-top").style = "display: block";
      } else {
        document.querySelector(".tap-top").style = "display: none";
      }
    }
  };


  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (process.browser) {
      document.body.classList.add("dark");
      config.config.layout_version = "dark";
    }
  } else {
    if (process.browser) {
      document.body.classList.remove("dark");
      config.config.layout_version = "light";
    }
  }








  return (
    <div>
      <div className="sidebar-btn dark-light-btn">
        <div className="dark-light">
          <div
            className="theme-layout-version"
            onClick={() => changeThemeLayout()}
          >
            {themeLayout ? "Light" : "Dark"}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ThemeSettings;
