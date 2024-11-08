"use client";

import { RxScissors } from "react-icons/rx";
import * as React from "react";
import { useState } from "react";

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
// import { toast } from "react-toastify";
// import axios from "axios";
import BarberCard from "@/components/cards/barber-card";
import { EmployeesContext } from "@/context/employee-context";
import { Calendar } from "@/components/ui/calendar";
import { addHours, differenceInHours, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const BookNow = () => {
  const [open, setOpen] = useState(false);
  // const [openAvaiTime, setOpenAvaiTime] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState<Date | null>();
  const [isTrue, setIsTrue] = useState("");
  const { employees } = React.useContext(EmployeesContext);
  const [filterDate, setFilterDate] = useState("");
  const [booking, setBooking] = useState({
    firstname: "",
    phoneNumber: "",
    date: "",
    time: "",
    service: "",
    empID: "",
  });
  const [chooseEmployee, setChoosenEmployee] = useState<string | null>("");

  const findIndex = employees?.findIndex(
    (employee) => employee?._id === chooseEmployee
  );

  // const findIndexDate = employees[findIndex].availableDates.findIndex(
  //   (date) => format(new Date(date.startDate), "yyyy-MM-dd") === filterDate
  // );

  // const bookNow = async () => {
  //   const { firstname, phoneNumber, time, date, service, empID } = booking;

  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8008/api/v1/booking`,
  //       {
  //         firstname,
  //         phoneNumber,
  //         date,
  //         time,
  //         empID,
  //         service,
  //       }
  //     );
  //     if (response.status === 201) {
  //       toast.success("successfull to book now");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("failed to book now");
  //   }
  // };
  console.log(booking, isActive, time, open);
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
        <div className="flex justify-center gap-10">
          {employees?.map((emp, idx) => {
            return (
              <div
                key={`barbercard ${idx}`}
                onClick={() => {
                  setIsTrue(emp.name);
                  setBooking({ ...booking, empID: emp._id });
                  setChoosenEmployee(emp._id);
                }}
              >
                <BarberCard name={emp.name} selected={emp.name === isTrue} />
              </div>
            );
          })}
        </div>
        <div className="bg-white flex rounded-xl p-3 justify-center gap-10">
          <Calendar
            mode="single"
            selected={new Date(booking.date)}
            onSelect={(e) => {
              if (e) {
                setBooking({
                  ...booking,
                  date: format(new Date(e), "yyyy-MM-dd"),
                });
                setFilterDate(format(new Date(e), "yyyy-MM-dd"));
              }
            }}
            className="rounded-md border"
          />
          <div>
            <div>
              {employees[findIndex]?.availableDates
                .filter((a) => {
                  return format(a.startDate, "yyyy-MM-dd") === filterDate;
                })
                .map((a, i) => (
                  <div key={i}>
                    <div className="grid grid-cols-3 gap-5">
                      {new Array(
                        differenceInHours(
                          new Date(a?.endDate),
                          new Date(a.startDate)
                        ) + 1
                      )
                        .fill(0)
                        .map((n, key) => (
                          <Button
                            key={key}
                            disabled={
                              employees[findIndex].unAvailableTime.findIndex(
                                (b) =>
                                  format(new Date(b), "yyy-MM-dd HH:mm") ===
                                  format(
                                    addHours(new Date(a.startDate), key),
                                    "yyyy-MM-dd HH:mm"
                                  )
                              ) !== -1
                            }
                            onClick={() => {
                              setOpen(true), setIsActive(true);
                              setTime(
                                new Date(addHours(new Date(a.startDate), key))
                              );
                              setBooking({
                                ...booking,
                                time: format(
                                  addHours(new Date(a.startDate), key),
                                  "HH:mm"
                                ),
                              });
                            }}
                          >
                            {format(
                              addHours(new Date(a.startDate), key),
                              "HH:mm"
                            )}
                          </Button>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Input placeholder="Enter your name" type="text" />
            <Input placeholder="Enter your phonenumber" type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookNow;
