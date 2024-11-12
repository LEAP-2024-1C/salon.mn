"use client";
import Image from "next/image";
import React from "react";

import { Button } from "../ui/button";

const BestArtist = () => {
  const img: string[] = [
    "/images/employ1.png",
    "/images/employ2.png",
    "/images/employ3.png",
  ];
  return img.map((i, key2) => {
    return (
      <div
        key={key2}
        className="w-[384px] h-[536px] border border-gray-400 rounded-2xl overflow-hidden"
      >
        <div className="h-[274px] overflow-hidden">
          <Image width={384} height={274} alt="Logo" src={i} />
        </div>
        <div className="p-6 flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="text-[#BA7894]">4.4/5</div>
            <p>Эрэгтэй Үсчин</p>
          </div>
          <div>
            <h1 className="text-2xl">Name, Nickname</h1>
            <p className="text-[#555555]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              placeat.
            </p>
          </div>
          <Button className="hover:bg-[#BA7894] hover:text-white w-full bg-white  border border-[#BA7894] text-[#BA7894]">
            Цаг захиалах
          </Button>
        </div>
      </div>
    );
  });
};

export default BestArtist;
{
  /* <p className="text-wrap">
          Эрэгтэй үйлчлүүлэгчдэд үс засалт, өнгө шинэчлэл, үс засалтын зөвлөгөө
          өгөх. Үсийг зөв арчлах, засах болон илүү гоо сайхан болж харагдах
          зөвлөгөө өгөх. Багийн гишүүдтэй хамтран ажиллах, үйлчилгээний чанарыг
          сайжруулах, шинэ үйлчлүүлэгчдийг татах.
        </p>

        <div className="flex gap-3 items-center">
          <TbArrowLeftFromArc className=" text-lg" />
          <p>Үйлчлүүлэгчдийн 90% нь ахин үйлчлүүлэхээр эргэж ирдэг.</p>
        </div>
        <div className="flex gap-3">
          <TbArrowLeftFromArc className=" text-lg" />
          <p>
            Үс засалт, өнгө, хэв маягийн чиг хандлагыг судлан, трэнд
            тодорхойлдог.
          </p>
        </div>
        <div className="flex gap-3">
          <TbArrowLeftFromArc className=" text-lg" />
          <p>Үйлчилгээний чанарыг үргэлж сайжруулахыг эрмэлздэг</p>
        </div> */
}
