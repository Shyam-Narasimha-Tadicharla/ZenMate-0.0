import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import feelingdown from '../../components/assets/images/feelingdown.jpg';
import classes from "../homepage/Styles/AboutSection.module.css";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div className={`${classes.About} flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-4 sm:p-8 lg:p-12`}>
      
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={feelingdown} 
          alt="Feeling Down" 
          className="w-full max-w-[500px] h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <motion.div
        ref={ref}
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : "hidden"}
        transition={{ ease: "easeInOut", duration: 0.9 }}
        className="w-full lg:w-1/2 text-center lg:text-left px-4"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-sage-800">Feeling Down?</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 mt-2">
          We're here to help you
        </h1>
        <p className="text-lg sm:text-xl text-sage-700 mt-4 leading-relaxed">
          Anxiety is a small word with a <span className="bg-sage-300 px-1">big impact</span>. At ZenMate, we're dedicated to helping you navigate the complexities of life
          and achieve personal growth on your terms. We understand that every individual is unique, and we provide tailored
          support to help you become your best self, learn to be more self-aware, and establish healthy boundaries.
        </p>
        
        {/* CTA Button */}
        <div className="mt-6">
          <Link to="/message" className="bg-[#5781f5] text-white text-lg px-6 py-3 rounded-full hover:bg-sage-600 transition duration-300 shadow-md">
            Chat with Zen
          </Link>
        </div>
      </motion.div>

    </div>
  );
};

export default AboutSection;
