import { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleNavbarCollapse = () => {
    setExpanded(false); // Collapse the navbar
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjusted for navbar height if needed
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg position-fixed w-100">
      <div className="container">
        <a className="navbar-brand" href="#hero">
          Mazen Abdelgawad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggler-icon">
            <FaBars />
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`${
                  activeSection === "hero" ? "active" : ""
                } nav-link`}
                onClick={handleNavbarCollapse}
                aria-current="page"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${
                  activeSection === "about" ? "active" : ""
                } nav-link`}
                onClick={handleNavbarCollapse}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${
                  activeSection === "experience" ? "active" : ""
                } nav-link`}
                onClick={handleNavbarCollapse}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${
                  activeSection === "portfolio" ? "active" : ""
                } nav-link`}
                onClick={handleNavbarCollapse}
                href="#portfolio"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`${
                  activeSection === "contact" ? "active" : ""
                } nav-link`}
                onClick={handleNavbarCollapse}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="navbar-socials">
            <a
              href="https://github.com/mazenabdelgawad700"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="navbar-social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mazen-abdelgawad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="navbar-social-link"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
