"use client";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { TbArrowLeftFromArc } from "react-icons/tb";
import Comment from "@/components/about/comment";
import { Button } from "@/components/ui/button";
import { SlCalender } from "react-icons/sl";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { DayPicker } from "react-day-picker";
import "react-day-picker/src/style.css";

const ArtistDetail = () => {
  const [step, SetStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [date, setDate] = useState<Date>();
  const nowDate = new Date();
  const openModal = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col bg-[#101828] text-[#FFFAF5] px-[15px] py-[30px] gap-10 ">
      <div className="flex flex-col gap-10 md:flex-row md:w-full ">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold pb-5 md:w-full">Barber men</h1>
          <div className="flex flex-col gap-10 md:flex-row ">
            <div className="">
              <Image
                height={514}
                width={400}
                alt="Logo"
                src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/bearded-male-with-crossed-arms-2021-08-29-09-58-27-utc-e1663215777361-pus73wug0r8gptf0jej696nwltvvzlxdtl9izvojyw.jpg"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5 md:w-1/2">
              <div className=" flex gap-5">
                <h1>Enkhee barder</h1>
                <div className="flex gap-1 items-center">
                  <Rating
                    style={{ maxWidth: 80, color: "red" }}
                    value={4}
                    readOnly
                  />
                  <p className="text-sm">5.0</p>
                </div>
              </div>
              <p>
                Mauris donec leo, gravida phasellus luctus. Adipiscing tellus in
                odio sed. Nam ut quis mi nisl orci, vitae. Ligula commodo et
                vitae.
              </p>
              <div className="flex gap-3 items-center">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Scelerisque nunc, at nisl non. Est.</p>
              </div>
              <div className="flex gap-3">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Scelerisque nunc, at nisl non. Est.</p>
              </div>
              <div className="flex gap-3">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Scelerisque nunc, at nisl non. Est.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#101843] shadow-2xl p-5 rounded-md flex flex-col gap-5 md:w-1/3  md:fixed  md:right-5 md:top-30">
          <div className="flex relative gap-5 ">
            <div className=" rounded-lg flex relative w-20 h-20">
              <Image
                fill={true}
                src="https://elementorkits.nathatype.com/barber97/wp-content/uploads/sites/30/elementor/thumbs/bearded-male-with-crossed-arms-2021-08-29-09-58-27-utc-e1663215777361-pus73wug0r8gptf0jej696nwltvvzlxdtl9izvojyw.jpg"
                alt="Photo"
                className="size-full object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex gap-1 items-center">
                <Rating
                  style={{ maxWidth: 80, color: "red" }}
                  value={4}
                  readOnly
                />
                <p className="text-sm">5.0</p>
              </div>
              <p className="font-bold">Darlene Robertson</p>
            </div>
          </div>
          {step === 1 && (
            <Button onClick={() => SetStep(step + 1)}>Цаг авах</Button>
          )}

          {step === 2 && (
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
                      date
                        ? `Selected: ${date.toLocaleDateString()}`
                        : "Pick a day."
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
          )}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <p className="text-xl font-extrabold">Үйлчилгээ сонгох</p>
              <div className="flex justify-between items-center text-[#101843] bg-white p-3 rounded-lg">
                <div>
                  <h1 className="font-extrabold">Үс тайралт</h1>
                  <p>Үргэжлэх хугацаа: 30 мин</p>
                  <p className="font-extrabold">40,000₮</p>
                </div>
                <Button className="border border-[#101843]">
                  <MdAdd />
                </Button>
              </div>
              <div className="flex justify-between items-center text-[#101843] bg-white p-3 rounded-lg">
                <div>
                  <h1 className="font-extrabold">Шулуун хими</h1>
                  <p>Үргэжлэх хугацаа: 30 мин</p>
                  <p className="font-extrabold">40,000₮</p>
                </div>
                <Button className="border border-[#101843]">
                  <MdAdd />
                </Button>
              </div>
              <div className="flex justify-between items-center text-[#101843] bg-white p-3 rounded-lg">
                <div>
                  <h1 className="font-extrabold">Буржгар хими</h1>
                  <p>Үргэжлэх хугацаа: 30 мин</p>
                  <p className="font-extrabold">40,000₮</p>
                </div>
                <Button className="border border-[#101843]">
                  <MdAdd />
                </Button>
              </div>
              <div className="text-[#101843] bg-white p-3 rounded-lg">
                <div>
                  <p>Нийт үргэжлэх хугацаа: 90 мин</p>
                  <p className="">Нийт үнийн дүн: 120,000₮</p>
                  <p className="text-center pt-2 font-bold">
                    Цаг баталгаажуулалт 5 000₮. Таньд амжилт хүсэе
                  </p>
                </div>
                <Button
                  className="font-extrabold w-full bg-[#101843] text-white hover:bg-black"
                  onClick={() => SetStep(step + 1)}
                >
                  Баталгаажуулах
                </Button>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col gap-5">
              <p className="text-xl font-extrabold">Төлбөр төлөх</p>

              <Button className="font-extrabold w-full ">Банкны аппаар </Button>
              <Button className="font-extrabold w-full ">MonPya</Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10 md:pr-10 md:w-2/3">
        <h1 className="text-4xl font-extrabold">Reviews</h1>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default ArtistDetail;
