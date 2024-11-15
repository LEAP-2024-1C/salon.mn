"use client";

import React from "react";
import Image from "next/image";

const Artists = () => {
  return (
    <section className=" bg-[#F7E5C180] flex flex-col gap-5 h-[75vh]">
      <div className="block bg-[#422A3C] text-white md:text-xl lg:text-2xl lg:text-center lg:py-6 animate-fadeInUp3 ">
        <p className="text-center lg:text-4xl lg:pt-4">GIFT CARDS</p>
        <p className="text-center md:max-w-[300px] lg:max-w-[900px] mx-auto pt-3">
          Үнэ цэнэтэй бэлгийн сонголт
        </p>
      </div>
      <div className="flex gap-5 px-20  py-10">
        <div className=" flex flex-col items-center">
          <div className=" relative w-[500px] h-[300px] rounded-2xl ">
            <Image
              fill={true}
              src="https://plus.unsplash.com/premium_photo-1728670182314-a8aefbb9d53c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lmdGNhcmR8ZW58MHx8MHx8fDA%3D"
              alt="Photo product card"
              className="w-auto h-auto"
            />
          </div>

          <p className="font-bold ">Gift card 200 000₮</p>
        </div>
        <div className=" flex flex-col items-center">
          <div className=" relative w-[500px] h-[300px] rounded-2xl ">
            <Image
              fill={true}
              src="https://media.istockphoto.com/id/2161671727/photo/gift-cards.webp?a=1&b=1&s=612x612&w=0&k=20&c=myece5SP6oqiYW1YyxkwaeFDLcbSrVIZ9PfjOnUS7RQ="
              alt="Photo product card"
              className="w-auto h-auto"
            />
          </div>

          <p className="font-bold ">Gift card 300 000₮</p>
        </div>
      </div>
    </section>
  );
};
export default Artists;
