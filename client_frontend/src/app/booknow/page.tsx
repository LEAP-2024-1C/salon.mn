"use client";
import { Input } from "@/components/ui/input";
import { RxScissors } from "react-icons/rx";
import * as React from "react";
// import { format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";

// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";

const BookNow = () => {
  const [allbooking, setAllbooking] = useState([
    {
      firstname: "",
      phoneNumber: "",
      date: "",
      time: "",
      employee: "",
    },
  ]);
  const [booking, setBooking] = useState({
    firstname: "",
    phoneNumber: "",
    date: "",
    time: "",
  });
  console.log(booking);
  const bookNow = async () => {
    const { firstname, phoneNumber, time, date } = booking;
    try {
      const response = await axios.post(
        `http://localhost:8008/api/v1/booking`,
        {
          firstname,
          phoneNumber,
          date,
          time,
          employee: "6726365aa711ec62596d2cf9",
        }
      );
      if (response.status === 201) {
        toast.success("successfull to book now");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to book now");
    }
  };
  const getBook = async () => {
    try {
      const response = await axios.get(`http://localhost:8008/api/v1/booking`);
      if (response.status === 201) {
        toast.success("successfull to book now");
        setAllbooking(response.data.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to book now");
    }
  };
  React.useEffect(() => {
    getBook();
  }, []);
  return (
    <div className="bg-[#101828]">
      <div className="bg-[#101828] p-2 pt-10 flex flex-col gap-10 md:m-auto md:container">
        <div className="flex flex-row gap-3">
          <p className="font-bold text-4xl text-red-400">Logo</p>

          <p className="font-bold text-5xl text-white">Цаг захиалах</p>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-center lg:flex-row lg:items-center lg:justify-center">
          <Image
            src="/images/barbermodel.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="flex flex-col gap-3">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              eos voluptas aspernatur deleniti. Quae, cum!
            </p>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Үсчин
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Хумс будалт
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Гуаша
            </div>
            <div className="text-white flex items-center gap-2">
              <RxScissors className="text-[#f97066]" />
              Гоо сайхан
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:w-[560px] md:flex md:m-auto border border-red-500 p-4 rounded-lg">
          <div>
            <p className="text-white">Нэр</p>
            <Input
              type="text"
              placeholder="Нэр"
              onChange={(e) =>
                setBooking({ ...booking, firstname: e.target.value })
              }
            />
          </div>
          <div>
            <p className="text-white">Утас</p>
            <Input
              type="text"
              placeholder="Утасны дугаар"
              onChange={(e) =>
                setBooking({ ...booking, phoneNumber: e.target.value })
              }
            />
          </div>
          <input
            type="date"
            placeholder="date"
            onChange={(e) => setBooking({ ...booking, date: e.target.value })}
          />
          <input
            type="time"
            onChange={(e) => setBooking({ ...booking, time: e.target.value })}
          />
          <Button variant="secondary" onClick={bookNow}>
            Цаг захиалах
          </Button>
        </div>
        <div className="text-white">
          {allbooking?.map((booking, idx) => {
            return (
              <div key={`allbooking` + idx} className="flex flex-col gap-4">
                <p>{booking.date}</p>
                <p>{booking.time}</p>
                <p>{booking.firstname}</p>
                <p>{booking.phoneNumber}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BookNow;
