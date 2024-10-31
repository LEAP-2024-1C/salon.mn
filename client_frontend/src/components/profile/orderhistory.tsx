"use client";

import Image from "next/image";

const OrderHistory = () => {
  return (
    <div className=" flex flex-col gap-2 ">
      <p className="text-base font-bold">Цаг захиалгын түүх</p>
      <div className="text-[#101828] bg-white  rounded-lg p-3 flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className=" flex gap-3 items-center  w-full">
            <div className=" w-16 h-14  relative">
              <Image
                fill={true}
                src="/images/logo.png"
                alt="Photo"
                sizes="w-auto h-auto"
                className="w-auto h-auto object-cover rounded-lg "
                priority
              />
            </div>

            <div className="flex justify-between  gap-2 items-center w-full">
              <div>
                <p>Artist Baagii</p>
                <p>
                  30.10.2023 өдөр <span>12:00 цагт</span>
                </p>
                <p>Barber Hair cut service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
