"use client";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { GrPrevious } from "react-icons/gr";
import Image from "next/image";
import { GrNext } from "react-icons/gr";
import HistorybyYear from "@/components/about/historybyYear";
import BestArtist from "@/components/about/bestArtist";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="w-full h-[633px] relative overflow-hidden">
        <Image
          fill={true}
          alt="Logo"
          src="/images/home.png"
          className="absolute object-cover"
        />
        <div className="w-full h-full absolute bg-gradient-to-r from-[#422A3C] from-40%"></div>
        <div className="absolute h-[420px] p-10 w-[949px]  top-[100px] left-[100px]">
          <div className="flex ">
            <div className="flex flex-col gap-5  max-sm:w-full ">
              <p className="text-[15px] rounded-2xl py-2 px-4 text-white ">
                <span className="max-sm:text-sm">New!</span> Together and feel a
                better
              </p>
              <h1 className="font-bold text-[70px] text-[#F7E5C1] ">
                Find a service <br /> close to you
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[300px] ">
            <Link
              href="/booknow"
              className="relative rounded-3xl text-center text-[#422A3C] bg-white flex justify-center items-center py-2  "
            >
              <p>Цаг авах </p>
              <BsBoxArrowUpRight className="absolute right-5" />
            </Link>
            <Link
              href="/artists"
              className="relative rounded-3xl text-center text-[#422A3C] bg-[white] flex justify-center items-center py-2 hover:text-black"
            >
              <p>Артистууд </p>
              <BsBoxArrowUpRight className="absolute right-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-10 mt-10">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-[15px] text-[#BA7894]">Our Services</p>
          <h1 className="text-[45px] text-[#422A3C] font-bold">Recommended</h1>
          <p className="text-xl text-[#555555]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            nihil eum doloremque velit fugiat non quidem.
          </p>
        </div>
        <div className="grid gap-16 md:flex md:gap-10 m-auto">
          <BestArtist />
        </div>
        <div className="bg-[#EBF3F5] w-full px-28 py-8">
          <div className="mt-8">
            <p className="text-[45px] text-[#422A3C] font-bold text-center">
              Our history
            </p>
          </div>
          <div className="h-[488px] mt-5 overflow-scroll">
            <HistorybyYear />
          </div>
          <div className="flex gap-10 justify-center items-center mt-4">
            <Button className="bg-white w-7 h-7 flex justify-center items-center p-5 rounded-full border hover:bg-[#422A3C] ">
              <GrPrevious className="text-[#422A3C] hover:text-white" />
            </Button>
            <Button className="bg-white w-7 h-7 flex justify-center items-center p-5 rounded-full border hover:bg-[#422A3C] ">
              <GrNext className="text-[#422A3C] hover:text-white" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
