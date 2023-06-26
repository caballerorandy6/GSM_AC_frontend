import { Link, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import PhoneIcon from "./PhoneIcon";

const ServicesNav = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="flex navbar-center fixed top-0 z-30 bg-white w-full h-30 justify-around items-center mx-auto cursor-pointer p-2">
        <button
          onClick={() => navigate("/")}
          className="lg:w-2/12 flex justify-center"
        >
          <img
            className="h-16 w-16 md:h-20 md:w-20"
            src="./logo_3.webp"
            alt="Logo"
          />
        </button>

        {/* Nav Dropdown */}
        <div className="navbar-start w-1/12 lg:w-0 flex justify-around items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-indigo-600">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box text-white sm:text-lg"
            >
              <li>
                <LinkScroll
                  to="air-conditioning-installation"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Air Conditioning Installation
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="air-conditioning-repair"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Air Conditioning Repair
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="heating-installation"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Heating Installation
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="heating-repair"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Heating Repair
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="air-duct-Sanitizing"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Air Duct Sanitizing
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="attic-insulation"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-white font-semibold cursor-pointer"
                >
                  Attic Insulation
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>
        <Link
          className="btn btn-primary text-center justify-center items-center flex gap-2 lg:w-3/12"
          to="tel: +12812235020"
        >
          <PhoneIcon />
          <p className="hidden sm:block">Call now +1 (281) 223-5020</p>
        </Link>
      </nav>
    </>
  );
};

export default ServicesNav;
