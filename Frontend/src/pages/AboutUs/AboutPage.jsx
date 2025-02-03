import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import Layout from "../../components/layout/layout";

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
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-2">About</h1>
          <h2 className="text-4xl md:text-6xl font-serif">Our Team</h2>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/800/600" 
              alt="Team Meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-gray-800">ZenMate</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At ZenMate, we cultivate an environment of profound healing and transformative growth, 
                championing the cause of mental wellness through innovative and accessible therapeutic approaches. 
                Our mission transcends traditional boundaries, creating pathways to emotional well-being that 
                resonate with the modern individual.
              </p>
              <p>
                Our distinguished team of mental health professionals brings together decades of expertise 
                in nurturing psychological wellness and facilitating personal transformation. We create an 
                atmosphere of unconditional acceptance where individuals can explore their inner landscape, 
                address deep-seated emotional patterns, and discover powerful solutions to life's most 
                nuanced challenges. Through this journey of self-discovery, we stand as dedicated guides, 
                illuminating the path toward profound emotional resilience and authentic self-expression.
              </p>
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
      name: "Sai kiran Peddada",
      role: "Therapeutic Specialist",
      image: "/api/placeholder/400/500"
    }
  ];


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
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