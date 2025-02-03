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
    <header className="w-full fixed top-0 z-50">
      <nav className="bg-white py-4 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-serif">ZenMate</span>
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
          <button
            onClick={() => {
              if (!loggedIn) navigate("/login");
              else logoutUser();
            }}
            className="flex items-center gap-2 hover:text-gray-600"
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

const Footer = () => {
    return (
      <footer className="bg-white text-gray-600 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-serif">ZenMate</span>
                <div className="border-l-2 border-gray-300 pl-2">
                  <div className="text-xs uppercase">Mental</div>
                  <div className="text-xs uppercase">Wellness</div>
                </div>
              </div>
              <p className="text-sm">
                Commited to deliver value and empower lives.
              </p>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Brief</h3>
              <ul className="space-y-2">
                <li>
                  <div className="cursor-pointer hover:text-gray-900">
                    <Link to="/aboutus">About</Link>
                  </div>
                </li>
                <li>
                  <div className="cursor-pointer hover:text-gray-900">
                  <Link to="/articles">Articles</Link>
                  </div>
                </li>
                <li>
                  <div 
                    className="cursor-pointer hover:text-gray-900"
                  >
                    <Link to="/message">Chat</Link>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 mt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm">© {new Date().getFullYear()} by ZenMate Team. All Rights Reserved</p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-gray-900">𝕏</a>
                <a href="#" className="hover:text-gray-900">IG</a>
                <a href="#" className="hover:text-gray-900">FB</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

const ScrollToTop = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors"
      >
        ↑
      </button>
    );
};

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16"> {/* Add padding-top to account for fixed header */}
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;