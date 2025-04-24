import React, { useRef, useEffect, useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/berleen_Logo.jpeg";
import { AuthContext } from "../../context/AuthContext";
import "./header.css";

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
  {
    path: "/destinations",
    display: "Destinations",
    dropdown: [
      { path: "/destinations/kenya", display: "Kenya" },
      { path: "/destinations/tanzania", display: "Tanzania" },
      { path: "/destinations/uganda", display: "Uganda" },
    ],
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
];


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to keep track of menu open/close
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  const [dropdownOpen, setDropdownOpen] = useState({});
  const toggleDropdown = (key) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };


  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList?.add("sticky__header");
        } else {
          headerRef.current.classList?.remove("sticky__header");
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu open/close state

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            {/*Menu start */}
            <div className={`navigation ${isMenuOpen ? "show__menu" : ""}`} ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => {
  const hasDropdown = item.dropdown && item.dropdown.length > 0;
  const isDestinations = item.display === "Destinations";

  return (
    <li
      className={`nav__item relative w-full ${
        hasDropdown && !isMobile ? "group" : ""
      }`}
      key={index}
    >
      <div
        className={`flex justify-between items-center w-full cursor-pointer`}
        onClick={() => {
          if (hasDropdown && isMobile) toggleDropdown(index);
        }}
      >
        <NavLink
          to={item.path}
          className={(navClass) =>
            navClass.isActive ? "active__link w-full" : "w-full"
          }
        >
          {item.display}
        </NavLink>
        {isDestinations && (
          <i
            className={`ri-arrow-down-s-line ml-2 transition-transform duration-300 ${
              dropdownOpen[index] ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

      {/* Desktop Hover Dropdown */}
      {hasDropdown && !isMobile && (
        <ul className="absolute top-full left-0 bg-white rounded shadow-lg w-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          {item.dropdown.map((dropItem, dropIndex) => (
            <li key={dropIndex} className="px-4 py-2 hover:bg-gray-100">
              <Link to={dropItem.path}>{dropItem.display}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* Mobile Accordion Dropdown */}
      {hasDropdown && isMobile && (
        <ul
          className={`transition-all duration-300 overflow-hidden bg-gray-50 rounded ${
            dropdownOpen[index] ? "max-h-96 mt-2" : "max-h-0"
          }`}
        >
          {item.dropdown.map((dropItem, dropIndex) => (
            <li className="px-4 py-2 hover:bg-gray-100" key={dropIndex}>
              <Link to={dropItem.path}>{dropItem.display}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
})}

              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4">
              <div className="nav__btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0 p-2 logged__in_h5">
                      {user.username.charAt(0).toUpperCase() +
                        user.username.slice(1)}
                    </h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>

              <span className="mobile__menu" onClick={toggleMenu}>
                {/* Use the icon class to render the close icon */}
                {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
    
  );
};

export default Header;
