import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Single card component that receives individual testimonial props
const TestimonialCard = ({ heading, quote, imageSrc, altText, name }) => {
  const [ref, inView] = useInView();
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { 
        opacity: 1, 
        transition: { ease: "easeInOut", duration: 0.6 } 
      } : "hidden"}
      className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="p-8 text-center">
        <img 
          src={heading} 
          alt="Testimonial heading" 
          className="mx-auto mb-6 h-12 w-auto"
        />
        <p className="text-lg text-sage-600 mb-6 italic">
          {quote}
        </p>
        <div className="mb-4">
          <img 
            src={imageSrc} 
            alt={altText}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
        </div>
        <p className="text-xl font-bold text-sage-800">
          {name}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;