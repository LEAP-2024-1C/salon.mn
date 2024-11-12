"use client";
import Image from "next/image";
import React from "react";

const HistorybyYear = () => {
  const year = [
    {
      num: "SINCE 2013",
      info: "  FIRST GREAT salon 2013 онд үүсгэн байгуулагдсан бөгөөд үс засах, өнгө шинэчлэлт, үс арчилгаа, гоо сайхны салбарт амжилттай үйл ажиллагаагаа явуулсаар ирсэн. Манай салон нь анх байгуулагдсан цагаасаа хойш үйлчлүүлэгчдийн сэтгэл ханамжийг тэргүүлэх зорилгоо болгож, салбарын хамгийн шилдэг үйлчилгээ үзүүлж байна.  ",
    },
    {
      num: "Манай үйлчилгээ",
      info: `Үс Засалт: Эмэгтэй, эрэгтэй үс засах үйлчилгээ, хамгийн орчин үеийн хэв маягууд болон үзүүлэлтүүд.
             Үс Өнгө Шинэчлэл: Орчин үеийн үс өнгийн трендүүд, үс өнгө тохируулах үйлчилгээ.
             Үс Арчилгаа: Үсний эрүүл мэндийг сайжруулах, үсийг ургуулах, үс сэргээлт болон үс тордох үйлчилгээ.
             Үс Засалтын Зөвлөгөө: Үс засах, өнгөний талаар мэргэжлийн зөвлөгөө өгөх.`,
    },
    {
      num: "Манай онцлог шинж чанарууд",
      info: `Шилдэг Үсчид: Манай салонд туршлагатай, өндөр мэргэжлийн үсчин, гоо сайхны зөвлөхүүд ажилладаг.
Орчин үеийн тоног төхөөрөмж: Манай салон үс засалтын хамгийн сүүлийн үеийн техник, тоног төхөөрөмжийг ашигладаг.
Гоо сайхны орчин: Салон маань тийм тав тухтай, сэтгэлд нийцсэн орчныг бүрдүүлж, үйлчлүүлэгчдэд амрах таатай орчинг санал болгодог.
Шинэ чиг хандлагад нийцэх: Бид үс засалтын шинэ чиг хандлага, өнгөний трендүүдийг өдөр тутамд судалж, үйлчлүүлэгчдэд хамгийн сүүлийн үеийн үйлчилгээг санал болгодог.`,
    },
    {
      num: "NOW 2024",
      info: "    Манай салон нь өндөр технологи, шинэ үеийн үс засалтын үйлчилгээ болон үйлчлүүлэгчдэд зориулсан хамгийн тохиромжтой нөхцлийг бүрдүүлэх зорилготой. Бид үйлчлүүлэгчдийн сэтгэл ханамжийг үргэлж дээд зэргээр хадгалж, шилдэг чанартай үйлчилгээг өргөжүүлэхэд анхаарна.",
    },
  ];
  return year.map((w, key3) => {
    return (
      <div
        key={key3}
        className="h-[488px] px-40 py-24 bg-[#422A3C] flex rounded-3xl gap-4"
      >
        <div className="flex-1 flex justify-end">
          <Image
            height={280}
            width={280}
            alt="Logo"
            src="/images/pole.jpg"
            className="rounded-full"
          />
        </div>
        <div className="flex-1 text-[#EDFFF0]">
          <h1 className=" font-extrabold text-2xl">{w.num}</h1>
          <p className="mt-4">{w.info}</p>
        </div>
      </div>
    );
  });
};

export default HistorybyYear;
