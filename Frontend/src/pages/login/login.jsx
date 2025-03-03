import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoginWithEmail, LoginWithGoogle, SignupWithEmail } from "../../firebase/firebase";
import LoginContext from "../../context/context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Illustration from "../../svgs/piechart.png";
import GoogleIcon from "../../svgs/googleicon.png";
import {Logo} from '../../svgs/logoSVG';
// import Illustration from "../../svgs/illustration.png"; 



const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [logging, setLogging] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  // Restore the Page Title
  useEffect(() => {
    document.title = "Zenmate | Mental Wellness";
  }, []);

  useEffect(() => {
    setLoginData({ email: "", password: "" });
  }, [isRegistered]);

  const handleLoginDataChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginWithGoogle = async () => {
    try {
      const res = await LoginWithGoogle();
      if (res) {
        setLoggedIn(true);
      }
    } catch (error) {
      toast.error("Error signing in with Google", { position: "top-right" });
    }
  };

  const LoginandSignup = async () => {
    try {
      if (!termsAccepted) {
        toast.error("You must accept the Terms and Conditions.", { position: "top-right" });
        return;
      }
      if (isRegistered) {
        await LoginWithEmail(loginData.email, loginData.password);
      } else {
        await SignupWithEmail(loginData.email, loginData.password);
        
      }
      setLogging(false);
      setLoggedIn(true);
    } catch (error) {
      toast.error(isRegistered ? "Invalid credentials" : "Error creating account", {
        position: "top-right",
      });
      setLogging(false);
    }
  };

  

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (loginData.email === "" || loginData.password === "") {
      toast.error("Please enter all the fields", { position: "top-right" });
      return;
    }

    const isCorrectMail = loginData.email
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (!isCorrectMail) {
      toast.error("Please enter a correct email", { position: "top-right" });
      return;
    }

     // Password validation (only for sign-up)
     if (!isRegistered) {
      const password = loginData.password;
      
      if (password.length < 8) {
        toast.error("Password must be at least 8 characters long", {
          position: "top-right"
        });
        return;
      }
      if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one uppercase letter", {
          position: "top-right"
        });
        return;
      }
      if (!/[a-z]/.test(password)) {
        toast.error("Password must contain at least one lowercase letter", {
          position: "top-right"
        });
        return;
      }
      if (!/[0-9]/.test(password)) {
        toast.error("Password must contain at least one number", {
          position: "top-right"
        });
        return;
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        toast.error("Password must contain at least one special character (!@#$%^&*)", {
          position: "top-right"
        });
        return;
      }
      else{
        toast.success("Account Created Successfully",{
          position: "top-right"
        });
      }
    }
    
   
    setLogging(true);
    LoginandSignup();
  };

  useEffect(() => {
    if (loggedIn) {
      toast.success("Logged in Successfully", { position: "top-right" });
      login();
      navigate("/message");
    }
  }, [loggedIn, login, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-200">
      <ToastContainer />
      
      <Link to="/" className="flex items-center space-x-2 mb-8">
        <Logo />
        <span className="text-3xl font-bold">ZenMate</span>
        <div className="border-l-2 border-gray-300 pl-2">
            <div className="text-sm uppercase">Mental</div>
            <div className="text-sm uppercase">Wellness</div>
          </div>
      </Link>
      <div className="flex w-[850px] h-[550px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left side - Form */}
        <div className="w-2/3 p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">{isRegistered ? "Sign in" : "Sign up"}</h2>
            <p className="text-gray-500">
            {isRegistered ? "Enter your credentials 👋" : "Register new Account 👇"}{' '}
            </p>
          </div>

          <form onSubmit={handleSubmitButton}>
            {/* Name Fields (Only for Sign Up) */}
            {!isRegistered && (
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-1/2 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )}

            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter your Email"
                value={loginData.email}
                onChange={handleLoginDataChange}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-4 relative">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="w-full p-2 border border-gray-300 rounded-md pr-10"
                placeholder="Enter a Password"
                value={loginData.password}
                onChange={handleLoginDataChange}
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute top-2/4 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            
            {/* Terms & Conditions */}
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the <Link to="/terms" className="text-blue-500">Terms and Conditions</Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md"
              disabled={logging}
            >
              {logging ? "Processing..." : isRegistered ? "Sign in" : "Sign up"}
            </button>
          </form>

           {/* Google Sign-in Button */}
           <button
            onClick={handleLoginWithGoogle}
            className="w-full mt-4 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100"
          >
            <img src={GoogleIcon} alt="Google Icon" className="w-6 h-6 mr-2" />
            {isRegistered ? "Sign in with Google" : "Sign up with Google"}
          </button>

          {/* Toggle Sign In / Sign Up */}
          <p className="text-sm text-gray-600 mt-4 text-center">
            {isRegistered ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              onClick={() => setIsRegistered(prev => !prev)}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              {isRegistered ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Right side - Illustration */}
        <div className="w-1/2  bg-black flex items-center justify-center p-6">
          <img src={Illustration} alt="Illustration" className="w-full object-cover" />
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 text-sm text-gray-600 p-4">
        Having Issues? Contact us at <span className="text-blue-500">c15@gmail.com</span>
      </div>
    </div>
  );
};



export default Login;
