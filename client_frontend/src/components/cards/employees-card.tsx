import React from 'react';

interface EmployeesCardProps {

  name: string; // Нэр
  position: string; // Албан тушаал
  image: string; // Зураг
  rating: number; // Үнэлгээ
  feedback: string; // Сэтгэгдэл

}

const EmployeesCard: React.FC<EmployeesCardProps> = ({ name, position, image, rating, feedback }) => {
  return (
<div className="bg-gray-900 text-white p-6 rounded-lg max-w-sm mx-auto my-4">
<div className="flex items-center mb-4">
<img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
<div className="flex-1">
<h3 className="font-semibold">{name}</h3>
<p className="text-sm text-gray-400">{position}</p>
</div>
<div className="flex items-center">
{[...Array(5)].map((_, i) => (
<span key={i} className={`text-yellow-400 text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`}>★
</span>
))}
<span className="ml-2 text-lg">{rating}</span>
</div>
</div>
<p className="text-gray-300">{feedback}</p>
</div>

  );

};

export default EmployeesCard;
 