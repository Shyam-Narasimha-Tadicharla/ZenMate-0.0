import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { LoginWithEmail, LoginWithGoogle, SignupWithEmail } from "../../firebase/firebase";
import LoginContext from "../../context/context";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  useEffect(() => {
    setError({
      email: "",
      password: "",
    });
  }, [isRegistered]);

  const handleLoginDataChange = (e) => {
    setLoginError(false);
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginWithGoogle = async () => {
    try {
      const res = await LoginWithGoogle();
      if (res) {
        setLoggedIn(true);
      }
    } catch (error) {
      toast.error("Error signing in with Google", {
        position: "top-right"
      });
    }
  };

  const LoginandSignup = async () => {
    try {
      if (isRegistered) {
        await LoginWithEmail(loginData.email, loginData.password);
      } else {
        await SignupWithEmail(loginData.email, loginData.password);
      }
      setLogging(false);
      setLoggedIn(true);
    } catch (error) {
      setLoginError(true);
      toast.error(isRegistered ? "Invalid credentials" : "Error creating account", {
        position: "top-right"
      });
      setErrorMessage(error.message);
      setLogging(false);
    }
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();
    
    if (loginData.email === "" || loginData.password === "") {
      toast.error("Please enter all the fields", {
        position: "top-right"
      });
      return;
    }

    const isCorrectMail = loginData.email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isCorrectMail) {
      toast.error("Please enter a correct email", {
        position: "top-right"
      });
      return;
    }
    
    if (!isRegistered && loginData.password.length < 8) {
      toast.error("Please enter a longer password", {
        position: "top-right"
      });
      return;
    }

    setLogging(true);
    LoginandSignup();
  };

  useEffect(() => {
    if (loggedIn) {
      login();
      navigate("/message");
    }
  }, [loggedIn, login, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="flex items-center mb-8">
      <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl font-serif">ZenMate</span>
          <div className="border-l-2 border-gray-300 pl-2">
            <div className="text-sm uppercase">Mental</div>
            <div className="text-sm uppercase">Wellness</div>
          </div>
        </Link>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6">
          {isRegistered ? (
            <>Welcome Back <span role="img" aria-label="wave">👋</span></>
          ) : (
            <>Register a New Account <span role="img" aria-label="point down">👇</span></>
          )}
        </h2>
        <form onSubmit={handleSubmitButton}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={loginData.email}
              onChange={handleLoginDataChange}
              disabled={isLoading}
              placeholder="example@email.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={loginData.password}
              onChange={handleLoginDataChange}
              disabled={isLoading}
              placeholder="At least 8 characters"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
              isRegistered ? 'bg-indigo-500 hover:bg-indigo-800 focus:ring-pink-500' : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
            }`}
            disabled={logging}
          >
            {logging ? 'Processing...' : (isRegistered ? 'Sign in' : 'Sign up')}
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">OR</div>
        <button
          onClick={handleLoginWithGoogle}
          className="w-full mt-4 bg-white border border-gray-300 text-gray-700 p-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
          {isRegistered ? 'Sign in ' : 'Sign up '}with Google
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {isRegistered ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              onClick={() => {
                setIsRegistered(prev => !prev);
                setLoginData({
                  email: "",
                  password: "",
                });
              }}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              {isRegistered ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;