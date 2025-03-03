
import heroVideo from '../../components/assets/videos/design1.mp4';

const HeroSection = ({ navigate }) => {
    return (
      <div className=" h-screen pt-24">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden bg-blue-400">
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
            <h1 className="text-3xl text-white font-extrabold mb-6">
              Nurturing Minds, Building Strength, Inspiring Growth
            </h1>
            
            <div className="text-2xl text-blue-200 cursor-pointer hover:text-blue-400 transition-colors mb-8"
              onClick={() => navigate("/message")}>
              Chat with Zen...<span className="animate-pulse">|</span>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
export default HeroSection;