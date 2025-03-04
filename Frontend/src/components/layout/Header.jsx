import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../../svgs/logoSVG";
import axios from "axios";
import LoginContext from "../../context/context";
import { Menu, X } from "lucide-react"; // Icons for menu

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useContext(LoginContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutUser = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_LINK + "/logout",
        { withCredentials: true }
      );
      if (data?.msg === "loggedout") {
        logout();
      }
    } catch (error) {
      console.log("Err in logout");
    }
  };

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-sm bg-white bg-opacity-40">
      <nav className="py-4 px-6 flex justify-between items-center">
        {/* Logo & Brand Name */}
        <NavLink to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-3xl">ZenMate</span>
          <div className="border-l-2 border-gray-300 pl-2 hidden sm:block">
            <div className="text-sm uppercase">Mental</div>
            <div className="text-sm uppercase">Wellness</div>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { to: "/aboutus", label: "About Us" },
            { to: "/articles", label: "Blogs" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/message", label: "Talk to Zen" },
            ...(loggedIn ? [{ to: "/analysis", label: "Analyse" }] : []),
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-xl text-black transition-all duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-800 before:transition-all before:duration-300 hover:before:w-full ${
                  isActive
                    ? "text-blue-800 font-semibold before:w-full"
                    : "hover:text-blue-800"
                }`
              }
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => (!loggedIn ? navigate("/login") : logoutUser())}
            className="text-black hover:text-blue-800 transition-all duration-300 text-xl"
          >
            {!loggedIn ? "Get Started" : "Logout ←"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          {[
            { to: "/aboutus", label: "About Us" },
            { to: "/articles", label: "Blogs" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/message", label: "Talk to Zen" },
            ...(loggedIn ? [{ to: "/analysis", label: "Analyse" }] : []),
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative text-black transition-all duration-300 before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[2px] before:bg-blue-800 before:transition-all before:duration-300 hover:before:w-full ${
                  isActive
                    ? "text-blue-800 font-semibold before:w-full"
                    : "hover:text-blue-800"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              !loggedIn ? navigate("/login") : logoutUser();
            }}
            className="text-black hover:text-blue-800 transition-all duration-300"
          >
            {!loggedIn ? "Get Started" : "Logout ←"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
