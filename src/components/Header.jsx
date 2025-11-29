import { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [activeLink, setActiveLink] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-based active link detection
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "#hero";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

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
    setMenuOpen(false); // close menu after selecting
  };

  return (
    <header className="header">
      <div className="logo">
        <a
          href="#hero"
          className={activeLink === "#hero" ? "active" : ""}
          onClick={() => handleClick("#hero")}
        >
          PORTFOLIO
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
        <span className={menuOpen ? "open" : ""}></span>
      </div>

      <nav className={`navbar ${menuOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a
              href="#about"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => handleClick("#about")}
            >
              About Me
            </a>
          </li>

          <li>
            <a
              href="#code"
              className={activeLink === "#code" ? "active" : ""}
              onClick={() => handleClick("#code")}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#design"
              className={activeLink === "#design" ? "active" : ""}
              onClick={() => handleClick("#design")}
            >
              Designs
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeLink === "#contact" ? "active" : ""}
              onClick={() => handleClick("#contact")}
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
