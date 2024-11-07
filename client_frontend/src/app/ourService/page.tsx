"use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import axios from "axios";

const OurServices = () => {
  // const [service, setService] = useState<any[]>([]);

  // const getService = async () => {
  //   try {
  //     const res = await axios.get(`http://localhost:8008/api/v1/service`);
  //     setService(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getService();
  // }, []);

  return (
    <div className="bg-[#101828] text-white font-serif">
      <div className="block md:text-xl lg:text-2xl lg:text-center lg:py-6 animate-fadeInUp3">
        <p className="text-center lg:text-4xl lg:pt-4">Үнэ & Үйлчилгээ</p>
        <p className="text-center md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
          Сайхан үс хүний бие, нүүрний өөг далдалдаг шидтэй
        </p>
      </div>

      <div className="block md:flex md:justify-between md:items-center md:text-xl md:gap-2 lg:max-w-[1200px] lg:mx-auto lg:py-8 animate-fadeInUp5">
        <div className="w-[300px] h-[500px] bg-[#ECE8DE] border-2 border-red-300 rounded-xl">
          {/* <p className="text-center text-2xl text-red-600">Эрэгтэй</p> */}
          {/* {service?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between w-[270px] mx-auto mt-6 text-xl text-white px-4"
            >
              <p className="font-semibold text-black">{item.name}</p>
              <p className="text-[#F63D68]">{item.price}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
