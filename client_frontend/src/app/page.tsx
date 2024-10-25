import { Button } from "@/components/ui/button";
import { Fullscreen } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="w-full heightcalc relative ">
        <Image
          fill={true}
          alt="Logo"
          src="/images/home.png"
          className=" object-cover"
        />
        <div className=" gradiant absolute w-full h-full flex flex-col justify-end items-center ">
          <div>
            <p className="bg-gray-600 text-white rounded-2xl py-2 px-4">
              <span className="text-red-600">New!</span> Together and feel a
              better
            </p>
            <h1 className="text-white font-black">
              Right Now <br /> Have an <br /> Barbersh0p ‘97 Your <br />{" "}
              Solution
            </h1>
            Aliquam aliquam congue varius vitae consequat <br /> tellus. Ac sit
            proin tempus placerat velit tincidunt <br /> enim. Eu sit mauris
            bibendum sociis pretium porta <br /> egestas. Tortor tincidunt eu
            imperdiet viverra nulla.
          </div>
          <div>
            <Button>Book now</Button>
            <Button>Artist</Button>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
