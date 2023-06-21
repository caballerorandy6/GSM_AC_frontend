import { Link } from "react-scroll";

const NavService = () => {
  return (
    <nav className="navbar-center hidden lg:flex w-6/12 lg:justify-center">
      <ul className="flex gap-6 px-1">
        <li className="flex items-center gap-2 text">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${location.pathname === "/" ? "gold" : ""}
        gold-hover font-bold text-indigo-600 text-xl transition-colors`}
          >
            Home
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${location.pathname === "about" ? "gold" : ""}
        gold-hover font-bold text-indigo-600 text-xl transition-colors`}
          >
            About
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${location.pathname === "services" ? "gold" : ""}
        gold-hover font-bold text-indigo-600 text-xl transition-colors`}
          >
            Services
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            activeClass="active"
            className={`${location.pathname === "contact" ? "gold" : ""}
        gold-hover font-bold text-indigo-600 text-xl transition-colors`}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavService;
