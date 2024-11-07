"use client";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Image from "next/image";

import HistorybyYear from "@/components/about/historybyYear";
import Comment from "@/components/about/comment";
import BestArtist from "@/components/about/bestArtist";
import Link from "next/link";
import CalendarList from "@/components/cards/day-list";


export default function Home() {
  return (
    <div className="bg-[#101828] ">
      <div className="w-full heightcalc relative  ">
        <Image
          fill={true}
          alt="Logo"
          src="/images/home.jpg"
          className=" size-full bg-white object-cover absolute  "
        />
        <div className="  absolute  p-10 h-full flex flex-col justify-end items-center gap-10  ">
          <div className="flex ">
            <div className="flex flex-col gap-5  max-sm:w-full ">
              <p className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-4">
                <span className="text-red-700 max-sm:text-sm">New!</span>{" "}
                Together and feel a better
              </p>
              <h1 className=" bg-gradient-to-r from-red-700 via-red-100 to-blue-800 inline-block text-transparent bg-clip-text  font-black text-[38px] max-sm:text-lg max-sm:w-full  ">
                First Great <br />
                Better <br /> Best
              </h1>
              {/* <h1 className="text-white font-bold text-lg ">
                Aliquam aliquam congue varius vitae consequattellus. Ac sit
                proin tempus placerat velit tincidunt enim. Eu sit mauris
                bibendum sociis pretium porta egestas. Tortor tincidunt eu
                imperdiet viverra nulla.
              </h1> */}
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full">
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
        <BestArtist />
        <HistorybyYear />
        <Comment />
      </div>
      <CalendarList/>
    </div>
  );
}
