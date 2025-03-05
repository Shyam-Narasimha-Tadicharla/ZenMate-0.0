import ServiceCard from './ServiceCard';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chatImage from '../../components/assets/images/ai.png';
import blogImage from '../../components/assets/images/chatwith.png';
import analysisImage from '../../components/assets/images/personal.png';
import counsel from '../../components/assets/images/counsel.png';


const ServicesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ChevronRight size={32} className="text-sage-600" />,
    prevArrow: <ChevronLeft size={32} className="text-sage-600" />,
  };

  const services = [
    {
      title: "Chat with Zen",
      description: "Your 24/7 companion for emotional support and guidance. Share your thoughts in a safe, judgment-free space with our AI-powered chat system.",
      image: chatImage,
      link: "/message",
      text: "Start chatting"
    },
    {
      title: "Wellness Articles",
      description: "Explore our curated collection of mental health articles, tips, and insights written by experts to support your wellness journey.",
      image: blogImage,
      link: "/articles",
      text: "Read now"
    },
    {
      title: "Personal Analysis",
      description: "Track your emotional well-being and gain insights into your mental health patterns with our advanced analysis tools.",
      image: analysisImage,
      link: "/analysis",
      text: "Check progress"
    },
    {
      title: "Counselling Sessions",
      description: "We provide accessible online counseling for mental health problems, ensuring immediate support with flexible scheduling worldwide.",
      image: counsel,
      link: "/notes",
      text: "Book a Session"
    }
  ];

  return (
    <section className="bg-white py-16 w-full">
      <div className="w-full mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-7xl text-sage-800 mb-4 pl-0">
            Our Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Comprehensive mental wellness support designed to help you thrive
          </p>
        </div>

        <div className="w-full mx-auto">
          <Slider {...settings}>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;