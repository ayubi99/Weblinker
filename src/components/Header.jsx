import { useState, useEffect, useRef } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Backlinks", href: "#backlinks", id: "backlinks" },
    { name: "About us", href: "#aboutus", id: "about us" },
    { name: "Portfolio", href: "#portfolio", id: "portfolio" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-md ${
        scrolled
          ? "bg-white backdrop-blur-md py-2 border-b border-gray-100/10"
          : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-2 group"
          >
            <div className="p-1.5 rounded-full bg-indigo-50 group-hover:bg-indigo-100 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-indigo-600 group-hover:text-indigo-700 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-indigo-600">
              WebLinker
            </span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <nav
              ref={menuRef}
              className={`transition-all duration-300 ${
                isMenuOpen
                  ? "absolute top-full left-0 right-0 bg-white shadow-xl py-4 px-5 mx-4 rounded-lg border border-gray-100/10"
                  : "hidden"
              } md:block md:relative md:top-0 md:bg-transparent md:shadow-none md:border-0`}
            >
              <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-5">
                {navLinks.map((item) => (
                  <li key={item.id} className="relative group">
                    <a
                      href={item.href}
                      onClick={() => handleLinkClick(item.id)}
                      className={`block px-3 py-1.5 font-medium transition-colors duration-300 ${
                        activeLink === item.id
                          ? "text-indigo-600"
                          : "text-gray-600 hover:text-indigo-500"
                      }`}
                      aria-current={activeLink === item.id ? "page" : undefined}
                    >
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-indigo-600 transition-all duration-300 w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100`}
                      ></span>
                    </a>
                  </li>
                ))}

                {/* Mobile Contact Button */}
                <li className="md:hidden mt-2 w-full">
                  <a
                    href="#contact"
                    onClick={() => handleLinkClick("contact")}
                    className="block w-full text-center bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-4 py-2.5 rounded-md font-medium hover:from-indigo-700 hover:to-indigo-600 transition-all shadow"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={() => handleLinkClick("contact")}
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white px-5 py-2 rounded-md font-medium hover:from-indigo-700 hover:to-indigo-600 transition-all shadow"
              >
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden text-gray-700 text-2xl p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
