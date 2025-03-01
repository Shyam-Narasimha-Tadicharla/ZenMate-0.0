import React from "react";

const AffiliationsCard = ({ member }) => {
  return (
    <div className="bg-blue-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform">
      
      <div className="p-6 text-center">
        <h3 className="text-xl mb-2">{member.name}</h3>
        <div className="relative pt-[93%]"> {/* 4:3 aspect ratio */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default AffiliationsCard;
