import { useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Link as Link } from "react-router-dom";
import PhoneIcon from "./PhoneIcon";

const Nav = () => {
  const location = useLocation();

  return (
    <div className="flex fixed top-0 z-30 bg-white w-full h-30 justify-around items-center mx-auto cursor-pointer p-2">
      <LinkScroll
        to="hero"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="lg:w-1/12"
      >
        <img
          className="h-16 w-16 md:h-20 md:w-20"
          src="./logo_3.webp"
          alt="Logo"
        />
      </LinkScroll>

      <Link
        className="btn btn-primary text-center justify-center items-center flex gap-2"
        to="tel: +12812235020"
      >
        <PhoneIcon />
        <p className="text-sm lg:text-lg hidden sm:block">
          Call now +1 (281) 223-5020
        </p>
      </Link>

      {/* <div className="navbar-start w-1/12 lg:w-0 flex justify-around items-center">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-indigo-600 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <LinkScroll to="/" id="home">
                Home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="about" id="about">
                About
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="services" className="justify-between">
                Services
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="contact" className="justify-between">
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div> */}

      {/* Horizontal Menu */}
      <nav className="navbar-center hidden lg:flex w-6/12 lg:justify-center">
        <ul className="flex items-center justify-center mx-auto gap-4 sm:gap-8 font-bold text-xs sm:text-lg w-9/12 lg:text-2xl">
          <li className="flex items-center gap-2">
            <LinkScroll
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`${
                location.pathname === "home" ? "text-gray-500" : ""
              }text-indigo-600 gold-hover transition-colors`}
            >
              Home
            </LinkScroll>
          </li>
          <li className="flex items-center gap-2">
            <LinkScroll
              to="about-us"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`${
                location.pathname === "about-us" ? "gold" : ""
              }text-indigo-600 gold-hover transition-colors`}
            >
              About
            </LinkScroll>
          </li>
          <li className="flex items-center gap-2">
            <LinkScroll
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={
                location.pathname === "portfolio"
                  ? "gold gold-hover"
                  : "text-indigo-600 gold-hover transition-colors"
              }
            >
              Services
            </LinkScroll>
          </li>
          <li className="flex items-center gap-2">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={
                location.pathname === "contact"
                  ? ""
                  : "text-indigo-600 gold-hover transition-colors"
              }
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
