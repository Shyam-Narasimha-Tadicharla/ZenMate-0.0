import React from 'react';

const ServiceCard = ({ title, description, image, link , text}) => {
  return (
    <div className="px-4">
      <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="p-8">
          <div className="mb-6 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-48 object-contain transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-bold text-sage-800 mb-4 transform transition-all duration-300 group-hover:translate-x-2">
            {title}
          </h3>
          <p className="text-sage-600 mb-6 transform transition-all duration-300 group-hover:translate-x-2">
            {description}
          </p>
          <a 
            href={link}
            className="relative inline-block bg-sage-600 text-white px-6 py-2 rounded-full overflow-hidden transition-all duration-300 hover:bg-sage-700 hover:shadow-lg"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline-block">
              {text}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;