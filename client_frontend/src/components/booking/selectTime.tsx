"use client";
import React from "react";
import { Button } from "../ui/button";

const SelectTime = () => {
  return (
    <div className="flex  flex-col gap-5">
      <div className="flex relative gap-5 justify-between items-center text-xl font-extrabold">
        <p>Цаг сонгох </p>
        <button onClick={openModal} className="">
          <SlCalender />
        </button>
        {isOpen === true && (
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border absolute top-7 right-0  bg-white text-black  "
            footer={
              date ? `Selected: ${date.toLocaleDateString()}` : "Pick a day."
            }
          />
        )}
        {/*   className="rounded-md border absolute top-7 right-0  bg-white text-black  " */}

        <p>{date?.toLocaleDateString()}</p>
      </div>
      <div className="flex justify-between items-center">
        <p>October 2024</p>
        <p>November 2024</p>
        <div className="flex gap-1">
          <Button className="rounded-full bg-slate-500 text-white">
            <FaChevronLeft />
          </Button>
          <Button className="rounded-full bg-slate-500 text-white">
            <FaChevronRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className=" flex flex-col gap-2  items-center">
          <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
            {date ? date.getDate() : `${nowDate.getDate()}`}
          </p>
          <p>Mon</p>
        </div>

        <div className=" flex flex-col gap-2  items-center">
          <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
            {date ? date.getDate() + 2 : `${nowDate.getDate() + 2}`}
          </p>
          <p>Mon</p>
        </div>
        <div className=" flex flex-col gap-2  items-center">
          <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
            {date ? date.getDate() + 3 : `${nowDate.getDate() + 3}`}
          </p>
          <p>Mon</p>
        </div>
        <div className=" flex flex-col gap-2  items-center">
          <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
            {date ? date.getDate() + 4 : `${nowDate.getDate() + 4}`}
          </p>
          <p>Mon</p>
        </div>
        <div className=" flex flex-col gap-2  items-center">
          <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
            {date ? date.getDate() + 5 : `${nowDate.getDate() + 5}`}
          </p>
          <p>Mon</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-3 justify-between text-center items-center">
        <p className="rounded-lg border text-center border-white p-3 hover:bg-black">
          09:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          10:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          11:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          12:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          13:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          14:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          15:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          16:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          17:00
        </p>
        <p className="rounded-lg border border-white p-3 hover:bg-black">
          18:00
        </p>
      </div>
      <Button onClick={() => SetStep(step + 1)}>Үргэжлүүлэх</Button>
    </div>
  );
};

export default SelectTime;
