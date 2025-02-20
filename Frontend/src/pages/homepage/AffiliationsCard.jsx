import React from "react";

const AffiliationsCard = ({ member }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="relative pt-[63%]"> {/* 4:3 aspect ratio */}
        <img
          src={member.image}
          alt={member.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl mb-2">{member.name}</h3>
        <p className="text-gray-600">{member.role}</p>
      </div>
    </div>
  );
};

export default AffiliationsCard;