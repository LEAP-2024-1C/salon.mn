import React, { useState } from 'react';

const TimeList: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <div className="w-[300px] m-auto bg-[#f5f9ff] rounded-lg p-5 text-center shadow-lg">
      <div className="text-lg font-medium text-gray-800 mb-4">Боломжит цагууд*</div>
      
      <div className="grid grid-cols-3 gap-4">
        <div
          onClick={() => handleTimeClick("10:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "10:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">10:00</span>
        </div>
        
        <div
          onClick={() => handleTimeClick("11:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "11:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">11:00</span>
        </div>
        
        <div
          onClick={() => handleTimeClick("12:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "12:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">12:00</span>
        </div>
        
        <div
          onClick={() => handleTimeClick("13:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "13:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">13:00</span>
        </div>
        
        <div
          onClick={() => handleTimeClick("14:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "14:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">14:00</span>
        </div>
        
        <div
          onClick={() => handleTimeClick("15:00")}
          className={`flex items-center justify-center w-20 h-12 rounded-xl cursor-pointer transition-colors ${
            selectedTime === "15:00" ? "bg-blue-950 text-white" : "bg-white text-gray-800 border border-gray-300"
          }`}
        >
          <span className="text-lg">15:00</span>
        </div>
      </div>
    </div>
  );
};

export default TimeList;