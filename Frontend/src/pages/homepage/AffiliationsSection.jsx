
import AffiliationsCard from './AffiliationsCard';


const AffiliationsSection = () => {

  const teamMembers = [
    {
      name: "Institutions",
      role: "We partner with educational institutions to provide students with the mental health resources and support they need. By offering easy access to counseling, wellness programs, and emotional well-being tools, we aim to create a healthier, more supportive academic environment.",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Corporates",
      role: "Corporate well-being is essential to a productive and happy workplace, which is why we collaborate with companies to offer mental health solutions for employees. We provide stress management tools, virtual therapy, and wellness programs to ensure a balanced, supportive work environment.",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Therapists",
      role: "Our platform partners with licensed therapists to offer personalized mental health support tailored to individuals’ needs. By collaborating with experienced professionals, we ensure that users have access to high-quality therapy in a safe, confidential space.",
      image: "/api/placeholder/400/500"
    }
  ];

    return (
      <div className="bg-cream-50 p-8 md:p-16">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
              Who we work with 
            </h2>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AffiliationsCard key={index} member={member} />
          ))}
            </div>
          </div>
        </section>

      </div>
    );
  };

  export default AffiliationsSection;