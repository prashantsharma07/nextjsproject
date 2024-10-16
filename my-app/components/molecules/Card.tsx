
import React from 'react';

interface CardProps {
  title: string;
  subtitle: string;
  details: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, details }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-80">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <h4 className="text-lg mb-4">{subtitle}</h4>
      <p className="text-gray-700">{details}</p>
    </div>
  );
};

export default Card;
                