"use client";
import Image from "next/image";
import React from "react";
import { TbArrowLeftFromArc } from "react-icons/tb";

const BestArtist = () => {
  const img: string[] = [
    "/images/employ1.png",
    "/images/employ2.png",
    "/images/employ3.png",
  ];
  return img.map((i, key2) => {
    return (
      <div key={key2} className="flex flex-col gap-3 text-white">
        <Image
          height={514}
          width={400}
          alt="Logo"
          src={i}
          className="rounded-2xl"
        />
        <p className="text-wrap">
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
        </div>
      </div>
    );
  });
};

export default BestArtist;
