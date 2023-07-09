import { Link, useNavigate } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const ServicesNav = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="flex navbar-center sticky top-0 z-30 bg-white w-full h-30 justify-around items-center mx-auto cursor-pointer p-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-error text-white flex gap-2 items-center"
        >
          <FaArrowLeft className="text-white" />
          <p className="font-bold text-white hidden sm:block">Return Home</p>
          <p className="font-bold text-white sm:hidden">Back</p>
        </button>

        <button
          onClick={() => navigate("/")}
          className="lg:w-2/12 flex justify-center"
        >
          <Link to="/">
            <img
              className="h-16 w-16 md:h-20 md:w-20"
              src="./logo_3.webp"
              alt="Logo"
            />
          </Link>
        </button>

        {/* Nav Dropdown */}
        <div className="navbar-start w-1/12 lg:w-0 flex justify-around items-center">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-base-100/70 text-indigo-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
                  to="heating-installation"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-[#cbb26a]"
                >
                  Heating Installation
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="air-conditioning-repair"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-[#cbb26a]"
                >
                  Air Conditioning Repair
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="heating-repair"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-[#cbb26a]"
                >
                  Heating Repair
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="air-conditioning-installation"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-[#cbb26a]"
                >
                  Air Conditioning Installation
                </LinkScroll>
              </li>
              <li>
                <LinkScroll
                  to="air-duct-sanitizing"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="text-[#cbb26a]"
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
                  className="text-[#cbb26a]"
                >
                  Attic Insulation
                </LinkScroll>
              </li>
            </ul>
          </div>
        </div>

        <Link
          className="btn btn-primary btn-outline border-2 text-center justify-center items-center flex gap-2"
          to="tel: +12812235020"
        >
          <FaPhone />
          <p className="hidden sm:block">Call now +1 (281) 223-5020</p>
        </Link>
      </nav>
    </>
  );
};

export default ServicesNav;
