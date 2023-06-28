import { Link as LinkScroll } from "react-scroll";
import { Link as Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex navbar fixed top-0 z-30 bg-white w-full h-30 justify-around items-center mx-auto cursor-pointer p-2">
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

      <div className="navbar-start w-1/12 lg:w-0 flex justify-around items-center">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost text-base-100/70 lg:hidden"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box sm:text-lg"
          >
            <li>
              <LinkScroll
                to="hero"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#cbb26a]"
              >
                Home
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="about-us"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#cbb26a]"
              >
                About
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#cbb26a]"
              >
                Services
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#cbb26a]"
              >
                Testimonials
              </LinkScroll>
            </li>
            <li>
              <LinkScroll
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="text-[#cbb26a]"
              >
                Contact
              </LinkScroll>
            </li>
          </ul>
        </div>
      </div>

      {/* Horizontal Menu */}
      <div className="navbar-end menu hidden lg:flex w-6/12 lg:justify-center text-[#cbb26a]">
        <ul className="flex gap-2 items-center justify-center mx-auto font-bold text-xs md:text-lg w-9/12">
          <li className="flex items-center gap-2">
            <LinkScroll
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-base-300 hover:text-[#cbb26a] focus-visible:text-[#cbb26a]"
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
              className="hover:bg-base-300 hover:text-[#cbb26a] focus-visible:text-[#cbb26a]"
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
              className="hover:bg-base-300 hover:text-[#cbb26a] focus-visible:text-[#cbb26a]"
            >
              Services
            </LinkScroll>
          </li>
          <li className="flex items-center gap-2">
            <LinkScroll
              to="testimonials"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-base-300 hover:text-[#cbb26a] focus-visible:text-[#cbb26a]"
            >
              Testimonials
            </LinkScroll>
          </li>
          <li className="flex items-center gap-2">
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="hover:bg-base-300 hover:text-[#cbb26a] focus-visible:text-[#cbb26a]"
            >
              Contact
            </LinkScroll>
          </li>
        </ul>
      </div>
      <Link
        className="btn btn-primary text-center justify-center items-center flex gap-2"
        to="tel: +12812235020"
      >
        <FaPhone />
        <p className="hidden sm:block">Call now +1 (281) 223-5020</p>
      </Link>
    </nav>
  );
};

export default Nav;
