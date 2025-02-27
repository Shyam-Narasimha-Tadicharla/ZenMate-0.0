
import classes from "./Styles/TestimonialsSection.module.css";
import team1 from "../../components/assets/images/team-1.jpg";
import team2 from "../../components/assets/images/team-2.jpg";
import team3 from "../../components/assets/images/team-3.jpg";
import heading from "../../components/assets/images/tilt.png";

import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  
    const testimonials = [
      {
        id: 1,
        heading: heading,
        quote: "During my darkest days of depression, this platform became my lifeline. The 24/7 chat support helped me through sleepless nights. Today, I'm in a much better place and even helping others on their journey.",
        imageSrc: team3,
        altText: "Sarah's Photo",
        name: "Sarah Chen"
      },
      {
        id: 2,
        heading: heading,
        quote: "After my divorce, I felt completely isolated. The group sessions here connected me with others facing similar challenges. Not only did I find healing, but I also met my current partner.",
        imageSrc: team1,
        altText: "Michael's Photo",
        name: "Michael Rivera"
      },
      {
        id: 3,
        heading: heading,
        quote: "Social anxiety had kept me locked in my room for months. Through Zenmate, I've made great progress. This site didn't just help with my mental health, it gave me a real social life again.",
        imageSrc: team2,
        altText: "Emma's Photo",
        name: "Emma Thompson"
      }
    ];
  
    return (
        <div className={classes.testimonial_container}>
    
          <div className={classes.testimonial_top}>
            <h1> People's voice </h1>
            <p>
                Every journey to mental wellness is unique, but you don't have to walk 
                alone. These are real stories from members of our community who found 
                support, connection, and hope when they needed it most.
            </p>
          </div>
          <div className={classes.testimonial_bottom}>
            <TestimonialCard testimonials={testimonials} />
          </div>
        </div>
      );
    };

export default TestimonialsSection;