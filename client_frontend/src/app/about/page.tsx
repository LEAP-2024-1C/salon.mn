"use client";
import Image from "next/image";

import React from "react";
import { FaClipboardList, FaComments } from "react-icons/fa6";
import Comment from "@/components/about/comment";
import HistorybyYear from "@/components/about/historybyYear";
import BestArtist from "@/components/about/bestArtist";
import Topic1 from "@/components/about/topic1";
import Topic2 from "@/components/about/topic2";
import Topic3 from "@/components/about/topic3";
import Topic4 from "@/components/about/topic4";
import Summary from "@/components/about/summary";

const AboutUs = () => {
  return (
    <div className=" flex flex-col bg-[#101828] text-[#FFFAF5] px-[15px] py-[30px] gap-16">
      <div className="block   md:flex md:justify-between md:items-center">
        <div className="flex flex-col gap-3 md:w-1/2 ">
          <Image
            height={86}
            width={85}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/brand_promo.png"
            // layout="responsive"
            // sizes="(max-width: 768px) 100vw, 33vw"
            // srcSet
            // ref
            // loading={true}
            // priority
          />

          <h1 className="text-4xl font-extrabold">Бидний тухай</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            deserunt quaerat exercitationem, dolorum expedita fugiat itaque
          </p>
          <div className="">
            <div className="flex gap-5 items-center">
              <FaComments />
              <p>Мэргэжлийн артистууд</p>
            </div>
            <div className="flex gap-5 items-center">
              <FaClipboardList />
              <p>Үнэнч хэрэглэгчид</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:flex md:items-center md:justify-center">
          <Image
            height={320}
            width={430}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/fashion-barber-with-mustache-dressed-in-a-black-sh-NT3C8MP_isolated.png"
          />
        </div>
      </div>
      <div className=" flex flex-col text-center gap-5">
        <h1 className="text-4xl font-extrabold ">
          Сайхан үс хүний бие, нүүрний өөг далдалдаг шидтэй
        </h1>
        <p className="text-base">
          Vitae nunc diam convallis quam. Scelerisque porttitor facilisi diam
          sit gravida aliquam rutrum nulla. Sed sapien non natoque sodales ut
          amet. Tortor velit.
        </p>
      </div>
      <div className="grid gap-16 md:flex md:gap-10">
        <BestArtist />
      </div>

      <div className="flex flex-col gap-8 ">
        <div className="w-full h-[540px] relative ">
          <Image
            fill={true}
            alt="Logo"
            src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/2022/06/stylish-man-sitting-in-a-barbershop-2021-08-26-18-31-12-utc-e1663037894302.jpg"
            className="rounded-2xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-8 text-base md:flex-row">
          <HistorybyYear />
        </div>
      </div>

      <div className=" flex flex-col gap-10 md:flex-row">
        <Topic1 />
        <Topic2 />
      </div>

      <div className=" flex flex-col gap-10 md:flex-row">
        <Topic3 />
        <Topic4 />
      </div>

      <div className="flex flex-col gap-10 md:flex-row">
        <Summary />
        <div className=" flex flex-col gap-10 md:w-1/2">
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
