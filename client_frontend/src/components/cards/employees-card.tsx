import React from "react";
interface EmployeesCardProps {
  name: string; // Нэр
  position: string; // Албан тушаал
  image: string; // Зураг
  rating: number; // Үнэлгээ
  feedback: string; // Сэтгэгдэл
}
// React.FC<EmployeesCardProps>
const EmployeesCard = (
  {
    // name,
    // position,
    // image,
    // rating
    // feedback,
  }
) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg max-w-sm mx-auto my-4">
      <div className="flex items-center mb-4">
        <img
          src="/images/testmodel1.png"
          alt="png"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex-1">
          <h3 className="font-semibold">bataa</h3>
          <p className="text-sm text-gray-400">barber</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-yellow-400 text-xl ${
                i < 5 ? "text-yellow-400" : "text-gray-400"
              }`}
            >
              ★
            </span>
          ))}
          <span className="ml-2 text-lg">5</span>
        </div>
      </div>
      <p className="text-gray-300">cool</p>
    </div>
  );
};
export default EmployeesCard;
