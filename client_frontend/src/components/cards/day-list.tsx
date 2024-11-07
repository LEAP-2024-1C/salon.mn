import React, { useState } from 'react';

const CalendarList: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  return (
    <div className="w-[300px] m-auto bg-[#f5f9ff] rounded-lg p-5 text-center shadow-lg">
      <div className="text-lg font-medium text-gray-800 mb-4">11-р сар 2024 он</div>
      
      <div className="flex justify-between px-5">
        <div
          onClick={() => handleDayClick(5)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedDay === 5 ? "bg-black text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-xl">5</span>
          <span className={`text-sm ${selectedDay === 5 ? "text-white" : "text-gray-600"}`}>МЯ</span>
        </div>

        <div
          onClick={() => handleDayClick(6)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedDay === 6 ? "bg-black text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-xl">6</span>
          <span className={`text-sm ${selectedDay === 6 ? "text-white" : "text-gray-600"}`}>ЛХ</span>
        </div>

        <div
          onClick={() => handleDayClick(7)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedDay === 7 ? "bg-black text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-xl">7</span>
          <span className={`text-sm ${selectedDay === 7 ? "text-white" : "text-gray-600"}`}>ПҮ</span>
        </div>

        <div
          onClick={() => handleDayClick(8)}
          className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedDay === 8 ? "bg-black text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-xl">8</span>
          <span className={`text-sm ${selectedDay === 8 ? "text-white" : "text-gray-600"}`}>БА</span>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-500">*Та үйлчилгэний өдрөө сонгоно уу.</div>
    </div>
  );
};

export default CalendarList;