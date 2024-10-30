import { Button } from "@/components/ui/button";
import { BsBoxArrowUpRight } from "react-icons/bs";

import Image from "next/image";
import About from "./about/page";

export default function Home() {
  return (
    <div className="bg-[#101828]">
      <div className="w-full heightcalc relative ">
        <Image
          fill={true}
          alt="Logo"
          src="/images/home.png"
          className=" object-cover"
        />
        <div className="  absolute  p-5 h-full flex flex-col justify-end items-center gap-10 ">
          <div className="flex flex-col gap-5">
            <p className="bg-gray-600 text-white text-lg rounded-2xl py-2 px-4">
              <span className="text-red-600">New!</span> Together and feel a
              better
            </p>
            <h1 className="text-white font-black text-[38px]">
              Right Now <br /> Have an <br /> Barbersh0p ‘97 Your <br />{" "}
              Solution
            </h1>
            <h1 className="text-white font-bold text-lg">
              Aliquam aliquam congue varius vitae consequat <br /> tellus. Ac
              sit proin tempus placerat velit tincidunt <br /> enim. Eu sit
              mauris bibendum sociis pretium porta <br /> egestas. Tortor
              tincidunt eu imperdiet viverra nulla.
            </h1>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <Button className=" rounded-3xl text-red-500 flex justify-end gap-36">
              Book now <BsBoxArrowUpRight />
            </Button>
            <Button className="rounded-3xl text-red-500 bg-[#101828] flex justify-end gap-40">
              Artist <BsBoxArrowUpRight />
            </Button>
          </div>
        </div>
      </div>

      <div>
        <About />
      </div>
    </div>
  );
}
