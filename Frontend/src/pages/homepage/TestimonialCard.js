
import { useState, useEffect } from "react";
import classes from "./Styles/TestimonialsSection.module.css";

const TestCard = ({ heading, quote, imageSrc, altText, name }) => {
  return (
    <div className={classes.testimonial_card + " " + classes.visible}>
      <img src={heading} className={classes.testimonial_card_heading_img} />
      <p className={classes.testimonial_card_quote}>{quote}</p>
      <img
        className={classes.testimonial_card_image}
        src={imageSrc}
        alt={altText}
      />
      <p className={classes.testimonial_card_name}>{name}</p>
    </div>
  );
};

const TestimonialCard = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Adjust the interval as needed (e.g., 5000 milliseconds = 5 seconds)

    return () => clearInterval(intervalId);
  }, [testimonials, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={classes.testimonial_slider}>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={
            classes.testimonial_card +
            " " +
            (index === currentIndex ? classes.visible : classes.hidden)
          }
        >
          <TestCard
            heading={testimonial.heading}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            altText={testimonial.altText}
            name={testimonial.name}
          />
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;