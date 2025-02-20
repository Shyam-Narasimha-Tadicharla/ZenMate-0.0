import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import Layout from "../../components/layout/layout";
import style from './AboutPage.module.css';
import team from './team.jpg';

const AboutSections = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/api/placeholder/1920/400")',
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl mb-2">Meet</h1>
          <h2 className="text-4xl md:text-6xl ">Our Team</h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24" >
      {/* <div className={style.about}> */}
      <div>
        <div className={`${style.responsivecontainerblock} ${style.bigContainer}`}>
        <div
          className={`${style.responsivecontainerblock} ${style.container} ${style.bottomContainer}`}
        >
          <div className={`${style.allText} ${style.bottomText}`}>
            <p className={style.headingText}>About Us</p>
            <p className={style.subHeadingText}>We Are Team C15</p>
            <p className={style.description}>
            Welcome to our mental health chat assistant platform, crafted with care by Abhinav, Shyam, Kiran, and Tanush. We’re here to support you every step of the way – a compassionate community where our empathetic AI listens, encourages, and provides helpful resources. This platform was thoughtfully built using the MERN tech stack, with Generative AI to offer tailored assistance, and WebSocket ensuring seamless, real-time communication with the Gemini API. We’ve also utilized Tailwind CSS to create a user-friendly and visually appealing interface, while Node and Express.js power the backend to keep everything running smoothly.
            <br/>
            <br/>

Together, we’re fostering an open space where understanding, encouragement, and mental well-being take center stage. You’re never alone on this journey – we stand with you, ready to offer support as you navigate through. Let’s continue to build a space where connection and empathy thrive.
            </p>
            <a
              href="https://www.youtube.com/watch?v=O3BUHwfHf84"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={style.explore}>View More</button>
            </a>
          </div>

          {/* Team Image replacing the YouTube Video */}
          <div className={style.videoContainer}>
            <img
              src={team}
              className={style.mainVideo} // Keeps the same styles as the YouTube iframe
              alt="Team Image"
            />
            <img
              className={`${style.dotsImg} image-block`}
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"
              alt="Decorative dots"
            />
          </div>
        </div>
      </div>
      </div>
        
      </section>
    </>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abhinav Jayanth",
      role: "Lead Therapist",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Shyam Narasimha Tadicharla",
      role: "Wellness Coach",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Tanush Talla",
      role: "Fitness Coach",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Sai kiran Pedada",
      role: "Therapeutic Specialist",
      image: "/api/placeholder/400/500"
    }
  ];


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage = () => {
  
  return (
    <Layout>
    <div className="w-full relative">
    <AboutSections />
    <TeamSection />
    </div>
    </Layout>
  );
};

export default AboutPage;