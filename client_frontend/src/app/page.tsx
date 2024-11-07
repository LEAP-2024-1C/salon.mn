"use client";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Image from "next/image";

import HistorybyYear from "@/components/about/historybyYear";
import Comment from "@/components/about/comment";
import BestArtist from "@/components/about/bestArtist";
import Link from "next/link";
import TimeSeList from "@/components/cards/time-list";

export default function Home() {
  return (
    <div className="bg-[#101828] ">
      <div className="w-full heightcalc relative  ">
        <Image
          fill={true}
          alt="Logo"
          src="/images/home.png"
          className=" size-full bg-white object-cover absolute  "
        />
        <div className="  absolute w-full  p-10 h-full flex flex-col justify-between items-center gap-10  ">
          <div className="flex ">
            <div className="flex flex-col gap-5  max-sm:w-full ">
              <p className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-4">
                <span className="text-red-700 max-sm:text-sm">New!</span>{" "}
                Together and feel a better
              </p>
              <h1 className=" bg-gradient-to-r from-black via-black to-black inline-block text-transparent bg-clip-text  font-bold text-[38px] max-sm:text-lg max-sm:w-full  ">
                Цагын хуваарь <br />
                Даваа - Баасан 8.30 - 21.00 <br /> Бямба - Ням 10.00 - 20.00
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-[300px] ">
            <Link
              href="/book-signin"
              className="relative rounded-3xl text-center text-white bg-[#101828] flex justify-center items-center py-2  hover:text-red-500"
            >
              <p>Цаг авах </p>
              <BsBoxArrowUpRight className="absolute right-5" />
            </Link>
            <Link
              href="/artists"
              className="relative rounded-3xl text-center text-red-500 bg-[white] flex justify-center items-center py-2 hover:text-black"
            >
              <p>Артистууд </p>
              <BsBoxArrowUpRight className="absolute right-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col gap-10">
        <div className="grid gap-16 md:flex md:gap-10">
          <BestArtist />
        </div>
        <HistorybyYear />
      </div>
      <TimeSeList/>
    </div>
  );
}
