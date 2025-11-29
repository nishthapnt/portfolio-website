import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("#hero");

  // Scroll-based active link detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "#hero"; // default
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // detect if the section is in view
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = `#${section.id}`;
        }
      });
      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActiveLink(id);
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo">
        <a
          href="#hero"
          
          className={activeLink === "#hero" ? "active" : ""}
        >
          PORTFOLIO
        </a>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a
              href="#about"
              
              className={activeLink === "#about" ? "active" : ""}
            >
              About Me
            </a>
          </li>

          

          <li>
            <a
              href="#code"
              
              className={activeLink === "#code" ? "active" : ""}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#design"
              
              className={activeLink === "#design" ? "active" : ""}
            >
              Designs
            </a>
          </li>

          <li>
            <a
              href="#contact"
              
              className={activeLink === "#contact" ? "active" : ""}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
