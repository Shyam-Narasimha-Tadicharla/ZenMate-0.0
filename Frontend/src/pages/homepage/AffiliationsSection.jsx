
import AffiliationsCard from './AffiliationsCard';


const AffiliationsSection = () => {

  const teamMembers = [
    
    {
      name: "Corporates",
      role: "Corporate well-being is essential to a productive and happy workplace, which is why we collaborate with companies to offer mental health solutions for employees. We provide stress management tools, virtual therapy, and wellness programs to ensure a balanced, supportive work environment.",
      image: "https://www.goodmind.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcorp.7466c9e8.png&w=384&q=75"
    },
    {
      name: "Institutions",
      role: "We partner with educational institutions to provide students with the mental health resources and support they need. By offering easy access to counseling, wellness programs, and emotional well-being tools, we aim to create a healthier, more supportive academic environment.",
      image: "https://www.goodmind.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finst.1a1a8cbb.png&w=384&q=75"
    },
    {
      name: "Therapists",
      role: "Our platform partners with licensed therapists to offer personalized mental health support tailored to individuals’ needs. By collaborating with experienced professionals, we ensure that users have access to high-quality therapy in a safe, confidential space.",
      image: "https://www.goodmind.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fther.8be04a27.png&w=384&q=75"
    }
  ];

    return (
      
        <section className="pb-28 pt-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl text-center text-gray-800 mb-12">
              Who we work with 
            </h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AffiliationsCard key={index} member={member} />
          ))}
            </div>
          </div>
        </section>

      
    );
  };

  export default AffiliationsSection;