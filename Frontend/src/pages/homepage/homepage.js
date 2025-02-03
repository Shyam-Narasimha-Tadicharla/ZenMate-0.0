import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/layout';

import ServiceCard from './ServiceCard';
import TestimonialCard from './TestimonialCard';

//maybe
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import 'tailwindcss/tailwind.css';
import heroVideo from '../../components/assets/videos/design.mp4';
import feelingdown from '../../components/assets/images/feelingdown.jpg';
import chatImage from '../../components/assets/images/chatImage.jpg';  // Add your image paths
import blogImage from '../../components/assets/images/blogImage.jpg';
import analysisImage from '../../components/assets/images/analysisImage.jpg';

import team1 from "../../components/assets/images/person1.png";
import team2 from "../../components/assets/images/person2.png";
import team3 from "../../components/assets/images/person3.png";
import heading from "../../components/assets/images/tilt.png";

//Header-old
// const Header = ({ loggedIn, logoutUser }) => {
//   const navigate = useNavigate();
  
//   return (
//     <header className="w-full fixed top-0 z-50">
//       {/* Top bar */}
      
//       {/* Main navigation */}
//       <nav className="bg-white py-4 px-6 flex justify-between items-center">
//         <Link to="/" className="flex items-center space-x-2">
//           <span className="text-3xl font-serif">ZenMate</span>
//           <div className="border-l-2 border-gray-300 pl-2">
//             <div className="text-sm uppercase">Mental</div>
//             <div className="text-sm uppercase">Wellness</div>
//           </div>
//         </Link>
        
//         <div className="flex items-center space-x-8">
//           <Link to="/aboutus" className="hover:text-gray-600">About Us</Link>
//           <Link to="/articles" className="hover:text-gray-600">Blogs</Link>
//           <Link to="/message" className="hover:text-gray-600">Talk to Zen</Link>
//           {loggedIn && (
//             <Link to="/analysis" className="hover:text-gray-600">Analyse</Link>
//           )}
//           <button
//             onClick={() => {
//               if (!loggedIn) navigate("/login");
//               else logoutUser();
//             }}
//             className="flex items-center gap-2 hover:text-gray-600"
//           >
//             {!loggedIn ? (
//               <span className="flex items-center gap-2">
//                 Get Started
//               </span>
//             ) : (
//               <span className="flex items-center gap-2">
//                 Logout ←
//               </span>
//             )}
//           </button>
//         </div>
//       </nav>
//     </header>
//   );
// };

const HeroSection = ({ navigate }) => {
  return (
    <div className="relative h-screen pt-24">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center px-12">
        <div className="w-full sm:w-1/2">
          <h1 className="text-3xl text-white font-bold mb-6">
            Nurturing Minds, Building Strength, Inspiring Growth
          </h1>
          
          <div className="text-2xl text-blue-200 cursor-pointer hover:text-blue-300 transition-colors mb-8"
            onClick={() => navigate("/message")}>
            Chat with Zen...<span className="animate-pulse">|</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

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
      link: "/message"
    },
    {
      title: "Wellness Articles",
      description: "Explore our curated collection of mental health articles, tips, and insights written by experts to support your wellness journey.",
      image: blogImage,
      link: "/articles"
    },
    {
      title: "Personal Analysis",
      description: "Track your emotional well-being and gain insights into your mental health patterns with our advanced analysis tools.",
      image: analysisImage,
      link: "/analysis"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-sage-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Comprehensive mental wellness support designed to help you thrive
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
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

const AboutSection = () => {
  return (
    <div className="bg-sage-100 p-8 md:p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="relative">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-4 border-l-4 border-sage-500"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-4 border-r-4 border-sage-500"></div>
            <img 
              src={feelingdown}
              alt="relevant image" 
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-sage-800 mb-6">
            Feeling Down?
          </h1>
          <p className="text-xl text-sage-700 mb-6">
            Anxiety is a small word with a <span className="bg-sage-300 px-1">big impact</span>. At ZenMate, we're here to help you identify and break down the barriers that are 
            holding you back.
          </p>
          <p className="text-lg text-sage-600 mb-6">
            At ZenMate, we're dedicated to helping you navigate the complexities of life 
            and achieve personal growth on your terms. Our AI chat assistant is an expert in addressing 
            a wide range of challenges—from stress management and emotional well-being to perfectionism and 
            personal fulfillment. We understand that every individual is unique, and we provide tailored 
            support to help you become your best self, learn to be more self-aware, and establish healthy boundaries.
          </p>
          <p className="text-lg text-sage-600 mb-8">
            Recognizing the hectic pace of modern life, we offer an understanding conversational partner to fit your schedule. 
            Whether you prefer to chat right after you wake up, after a stressful situation at work, right when you feel down, 
            we ensure you can access support whenever you want. We're also available for additional communication 
            via email as needed (additional fees may apply). Start your journey with us and discover how 
            to live a deeply fulfilling life, even amidst the busiest times.
          </p>
          <Link to="/message" className="bg-sage-500 text-white px-6 py-3 rounded-full hover:bg-sage-600 transition-colors">CHAT WITH ZEN NOW!</Link>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <ChevronRight size={32} className="text-sage-600" />,
    prevArrow: <ChevronLeft size={32} className="text-sage-600" />,
  };

  const testimonials = [
    {
      id: 1,
      heading: heading,
      quote: "During my darkest days of depression, this platform became my lifeline. The 24/7 chat support helped me through sleepless nights, and through the community forums, I found people who truly understood what I was going through. Today, I'm in a much better place and even helping others on their journey.",
      imageSrc: team1,
      altText: "Sarah's Photo",
      name: "Sarah Chen"
    },
    {
      id: 2,
      heading: heading,
      quote: "After my divorce, I felt completely isolated. The group sessions here connected me with others facing similar challenges. Not only did I find healing, but I also met my current partner in one of the recovery support groups. We both understood each other's journey, which made our connection deeper.",
      imageSrc: team2,
      altText: "Michael's Photo",
      name: "Michael Rivera"
    },
    {
      id: 3,
      heading: heading,
      quote: "Social anxiety had kept me locked in my room for months. The guided meditation sessions and virtual meetups slowly helped me rebuild my confidence. Through the friend-matching feature, I've made three close friends who I now meet regularly. This site didn't just help with my mental health – it gave me a real social life again.",
      imageSrc: team3,
      altText: "Emma's Photo",
      name: "Emma Thompson"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-sage-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-sage-800 mb-4">
            Stories of Hope
          </h2>
          <p className="text-lg text-sage-600 max-w-2xl mx-auto">
            Every journey to mental wellness is unique, but you don't have to walk 
            alone. These are real stories from members of our community who found 
            support, connection, and hope when they needed it most.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <TestimonialCard
                  heading={testimonial.heading}
                  quote={testimonial.quote}
                  imageSrc={testimonial.imageSrc}
                  altText={testimonial.altText}
                  name={testimonial.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const EmpoweringSection = () => {
  return (
    <div className="bg-cream-50 p-8 md:p-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sage-700 mb-6 leading-tight">
            Empowering You with Accountability and Support.
          </h2>
          <p className="text-lg text-sage-600 mb-6">
            Our approach at ZenMate is a little different to other mental health practices because 
            <span className="bg-sage-200 px-1">Zen sees you as a friend</span> in this process. It helps 
            you identify your goals and support you through this journey to 
            <span className="bg-sage-200 px-1">uncover a more fulfilling life.</span>
            We have also curated a list of articles that can help you navigate your feelings further.
          </p>
          <Link to="/articles" className="bg-sage-400 text-white px-6 py-3 rounded-full hover:bg-sage-500 transition-colors" onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}>CHECK OUT OUR BLOGS</Link>
          
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="relative">
            <div className="absolute inset-0 bg-sage-200 rounded-lg transform translate-x-2 translate-y-2"></div>
            <img 
              src={feelingdown}
              alt="Srelevant image" 
              className="relative z-10 w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

//Footer-old, Scroll-to-top-old, Homepage-old
// const Footer = ({ aboutClick, articlesClick, navigate }) => {
//   return (
//     <footer className="bg-white text-gray-600 py-16">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-2">
//               <span className="text-2xl font-serif">ZenMate</span>
//               <div className="border-l-2 border-gray-300 pl-2">
//                 <div className="text-xs uppercase">Mental</div>
//                 <div className="text-xs uppercase">Wellness</div>
//               </div>
//             </div>
//             <p className="text-sm">
//               Commited to deliver value and empower lives.
//             </p>
            
//           </div>

//           {/* Company Links */}
//           <div>
//             <h3 className="font-semibold mb-4">Brief</h3>
//             <ul className="space-y-2">
//               <li>
//                 <div onClick={aboutClick} className="cursor-pointer hover:text-gray-900">
//                   <Link to="/aboutus">About</Link>
//                 </div>
//               </li>
//               <li>
//                 <div onClick={articlesClick} className="cursor-pointer hover:text-gray-900">
//                 <Link to="/articles">Articles</Link>
//                 </div>
//               </li>
//               <li>
//                 <div 
//                   onClick={() => navigate("/message")} 
//                   className="cursor-pointer hover:text-gray-900"
//                 >
//                   Chat
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 mt-8 border-t">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-sm">© {new Date().getFullYear()} by ZenMate Team. All Rights Reserved</p>
//             <div className="flex space-x-6">
//               <a href="#" className="hover:text-gray-900">𝕏</a>
//               <a href="#" className="hover:text-gray-900">IG</a>
//               <a href="#" className="hover:text-gray-900">FB</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const ScrollToTop = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <button 
//       onClick={scrollToTop}
//       className="fixed bottom-8 right-8 bg-green-100 p-3 rounded-full hover:bg-green-200 transition-colors"
//     >
//       ↑
//     </button>
//   );
// };

// const Homepage = () => {
//   const navigate = useNavigate();
//   const { logout, loggedIn } = useContext(LoginContext);
//   const about = useRef(null);
//   const articles = useRef(null);

//   const aboutClick = () => {
//     about.current?.scrollIntoView({ behavior: "smooth" });
//   };
  
//   const articlesClick = () => {
//     articles.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const logoutUser = async () => {
//     try {
//       const { data } = await axios.get(
//         process.env.REACT_APP_API_LINK + "/logout",
//         { withCredentials: true }
//       );
//       if (data?.msg === "loggedout") {
//         logout();
//       }
//     } catch (error) {
//       console.log("Err in logout");
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <Header loggedIn={loggedIn} logoutUser={logoutUser} />
//       <HeroSection navigate={navigate} />
//       <AboutSection />
//       <EmpoweringSection />
//       <Footer 
//         aboutClick={aboutClick} 
//         articlesClick={articlesClick} 
//         navigate={navigate} 
//       />
//       <ScrollToTop />
//     </div>
//   );
// };

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <HeroSection navigate={navigate} />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <EmpoweringSection />
    </Layout>
  );
};

export default Homepage;