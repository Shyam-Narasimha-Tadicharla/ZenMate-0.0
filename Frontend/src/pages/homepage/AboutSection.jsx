import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import classes from "../homepage/Styles/AboutSection.module.css";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={`${classes.About} flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16 px-4 sm:px-8 lg:px-16 py-8`}>
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src="https://img.freepik.com/free-photo/anime-style-character-with-water_23-2151080194.jpg?ga=GA1.1.1012930415.1740240031&semt=ais_hybrid" 
          alt="Feeling Down" 
          className="w-full max-w-[400px] sm:max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : "hidden"}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full lg:w-1/2 text-center lg:text-left px-2 sm:px-6"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">Feeling Down?</h3>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
          We're here to help you
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed">
          Anxiety is a small word with a <span className="bg-blue-300 px-1">big impact</span>. At ZenMate, we're dedicated to helping you navigate the complexities of life
          and achieve personal growth on your terms. We understand that every individual is unique, and we provide tailored
          support to help you become your best self, learn to be more self-aware, and establish healthy boundaries.
        </p>
        
        {/* CTA Button */}
        <div className="mt-6">
          <Link 
            to="/message" 
            className="bg-[#5781f5] text-white text-base sm:text-lg px-5 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Chat with Zen
          </Link>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutSection;
