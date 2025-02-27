import React from 'react';

const ServiceCard = ({ title, description, image, link , text}) => {
  return (
    <div className="px-4">
      <div className="group rounded-lg overflow-hidden transition-all duration-200 hover:-translate-y-1">
        <div className="p-24 grid grid-cols-1 md:grid-cols-3 gap-0 flex items-center">
          <div className="mb-6 overflow-hidden ">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-80 object-contain transform transition-transform duration-200 group-hover:scale-110"
            />
          </div>
          <div> 
          </div>
          <div className=''>
            <h3 className="text-6xl font-bold text-sage-800 mb-4 transform transition-all duration-200 ">
            {title}
          </h3>
          <p className="text-sage-600 mb-6 transform transition-all duration-200 ">
            {description}
          </p>
          <a 
            href={link}
            className="relative inline-block bg-blue-600 text-white px-6 py-2 rounded-full overflow-hidden transition-all duration-200 hover:bg-sage-700 hover:shadow-lg"
          >
            <span className="relative z-10 transition-transform duration-200 inline-block">
              {text}
            </span>
          </a>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;