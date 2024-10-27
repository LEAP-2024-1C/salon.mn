"use client";
import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { TbArrowLeftFromArc } from "react-icons/tb";
import Comment from "@/components/about/comment";
import { Button } from "@/components/ui/button";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdAdd } from "react-icons/md";
import { Divide } from "lucide-react";

const ArtistDetail = () => {
  const [step, SetStep] = useState(1);
  //   const [isOpen, setIsOpen] = useState(false);
  //   const openModal = () => {
  //     return setIsOpen(true);
  //   };

  //   const closeModal = () => {
  //     return setIsOpen(false);
  //   };
  //   const [startDate, setStartDate] = useState(new Date());

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

        <div className="bg-[#101843] shadow-2xl p-5 rounded-md flex flex-col gap-5 md:w-1/3 md:bg-scroll md:fixed  md:right-5 md:top-20">
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
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 justify-between items-center text-xl font-extrabold">
                <p>Цаг сонгох </p>
                <SlCalender />
                {/* <DatePicker
                selected={startDate}
                onChange={() => setStartDate(startDate)}
              /> */}
              </div>
              <div className="flex justify-between items-center">
                <p>October 2024</p>
                <p>November 2024</p>
                <div className="flex gap-1">
                  <Button className="rounded-full bg-slate-500 text-white">
                    <FaChevronRight />
                  </Button>
                  <Button className="rounded-full bg-slate-500 text-white">
                    <FaChevronLeft />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between">
                <div className=" flex flex-col gap-2  items-center">
                  <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
                    21
                  </p>
                  <p>Mon</p>
                </div>
                <div className=" flex flex-col gap-2  items-center">
                  <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
                    21
                  </p>
                  <p>Mon</p>
                </div>
                <div className=" flex flex-col gap-2  items-center">
                  <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
                    22
                  </p>
                  <p>Mon</p>
                </div>
                <div className=" flex flex-col gap-2  items-center">
                  <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
                    23
                  </p>
                  <p>Mon</p>
                </div>
                <div className=" flex flex-col gap-2  items-center">
                  <p className="border border-white rounded-full p-3 text-3xl hover:bg-black">
                    23
                  </p>
                  <p>Mon</p>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-3 justify-between items-center">
                <p className="rounded-lg border border-white p-3 hover:bg-black">
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
