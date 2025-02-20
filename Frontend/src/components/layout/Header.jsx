
import {Logo} from '../../svgs/logoSVG';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginContext from '../../context/context';

const Header = () => {
  const navigate = useNavigate();
  const { loggedIn, logout } = useContext(LoginContext);
  
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
    <header className="w-full fixed top-0 z-50 text-opacity-100 backdrop-blur-sm">
      <nav className=" py-4 px-6 flex justify-between items-center bg-opacity-70 text-opacity-100 bg-white">
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
          <span className="text-3xl">ZenMate</span>
          <div className="border-l-2 border-gray-300 pl-2">
            <div className="text-sm uppercase">Mental</div>
            <div className="text-sm uppercase">Wellness</div>
          </div>
        </Link>
        
        <div className="flex items-center space-x-8"> 
          <Link to="/aboutus" className="hover:text-gray-600" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link>
          <Link to="/articles" className="hover:text-gray-600" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>Blogs</Link>
          <Link to="/message" className="hover:text-gray-600">Talk to Zen</Link>
          {loggedIn && (
            <Link to="/analysis" className="hover:text-gray-600" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>Analyse</Link>
          )}
          {loggedIn && (
            <Link to="/notes" className="hover:text-gray-600" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>Notes</Link>
          )}
          <button
            onClick={() => {
              if (!loggedIn) navigate("/login");
              else logoutUser();
            }}
            className="flex items-center gap-2 hover:text-gray-600 ml-8"
          >
            {!loggedIn ? (
              <span className="flex items-center gap-2">
                Get Started
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Logout ←
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;