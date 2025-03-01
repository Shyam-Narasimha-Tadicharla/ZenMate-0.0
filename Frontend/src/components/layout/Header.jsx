import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-3xl">ZenMate</span>
          <div className="border-l-2 border-gray-300 pl-2 hidden sm:block">
            <div className="text-sm uppercase">Mental</div>
            <div className="text-sm uppercase">Wellness</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/aboutus" className="hover:text-gray-600">About Us</Link>
          <Link to="/articles" className="hover:text-gray-600">Blogs</Link>
          <Link to="/message" className="hover:text-gray-600">Talk to Zen</Link>
          {loggedIn && <Link to="/analysis" className="hover:text-gray-600">Analyse</Link>}
          {loggedIn && <Link to="/notes" className="hover:text-gray-600">Notes</Link>}
          <button
            onClick={() => (!loggedIn ? navigate("/login") : logoutUser())}
            className="hover:text-gray-600 ml-8"
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
          <Link to="/aboutus" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/articles" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Blogs</Link>
          <Link to="/message" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Talk to Zen</Link>
          {loggedIn && <Link to="/analysis" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Analyse</Link>}
          {loggedIn && <Link to="/notes" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>Notes</Link>}
          <button
            onClick={() => {
              setMenuOpen(false);
              !loggedIn ? navigate("/login") : logoutUser();
            }}
            className="hover:text-gray-600"
          >
            {!loggedIn ? "Get Started" : "Logout ←"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
