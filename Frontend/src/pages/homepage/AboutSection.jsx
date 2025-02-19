import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link} from 'react-router-dom';
import feelingdown from '../../components/assets/images/feelingdown.jpg';
import classes from "../homepage/Styles/AboutSection.module.css";

const AboutSection = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
    });
    return (
      <div className={classes.About}>
       
      
          <img src={feelingdown} alt="" />
       
  
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : "hidden"}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.0}} 
          className={classes.extra_bg_div}
  
        ></motion.div>
  
        <div className={classes.AboutSection}>
          <h3>Feeling Down?</h3>
          <h1>We're here to help you</h1>
          <p>
          Anxiety is a small word with a <span className="bg-sage-300 px-1">big impact</span>.At ZenMate, we're dedicated to helping you navigate the complexities of life 
          and achieve personal growth on your terms.We understand that every individual is unique, and we provide tailored 
          support to help you become your best self, learn to be more self-aware, and establish healthy boundaries.
          </p>
          <Link to="/message" className="bg-[#8BC34A] text-white px-6 py-3 rounded-full hover:bg-sage-600 transition-colors">Chat with Zen</Link>
        </div>
      </div>
    );
  };

  export default AboutSection;