import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png";
import "./styles.css";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const isLight = html.getAttribute("data-theme") === "light";
    html.setAttribute("data-theme", isLight ? "dark" : "light");
  };

  return <>
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">Osama</span>
      </div>
      <div className="navbar-right">
        <a href="#about">About</a>
        <a href="#skills">skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="theme-toggle">🌓</button>
      </div>
    </div>
  </>
}

export default Navbar