"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle, FaHeartbeat } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa6";

const Summary = () => {
  const img = [
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
    "https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/whitelogo-ipsum-1.png",
  ];
  return (
    <div className="flex flex-col gap-10 md:w-1/2">
      <h1 className="text-4xl font-extrabold text-start ">
        Your review is our best way to grow and develop
      </h1>
      <div className=" grid grid-cols-2 gap-3 items-center justify-between">
        <div className="flex gap-3 items-center">
          <FaHeartbeat className="text-pink-600" />
          <p> 1200 Reviews</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaCheckCircle className="text-pink-600" />
          <p> Verified</p>
        </div>
        <div className="flex gap-3 items-center">
          <FaCertificate className="text-pink-600" />

          <p>Certified Employee</p>
        </div>
      </div>
      <p>
        Facilisi dignissim nisl id fringilla. Cras ipsum non bibendum duis. Nunc
        eget et nisi commodo nunc vel. Sit risus pellentesque ullamcorper
        scelerisque amet, sagittis, ipsum. Tellus senectus.
      </p>
      <div className="grid grid-cols-3">
        {img.map((i, key1) => {
          return (
            <Image key={key1} width={100} height={50} src={i} alt="Photo" />
          );
        })}
      </div>
      <p>
        “Mauris, pellentesque metus, duis est donec pellentesque lorem. Metus
        interdum consectetur sit semper. Viverra proin ultrices et rutrum at.
        Malesuada eleifend lobortis”
      </p>
      <p>~ Savannah Nguyen (Founder)</p>
    </div>
  );
};

export default Summary;
