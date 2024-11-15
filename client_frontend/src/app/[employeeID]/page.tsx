"use client";
import React, { useContext, useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { TbArrowLeftFromArc } from "react-icons/tb";
import Comment from "@/components/about/comment";
import { Button } from "@/components/ui/button";
import { SlCalender } from "react-icons/sl";
import { MdAdd } from "react-icons/md";
import "react-day-picker/src/style.css";

import { EmployeesContext } from "@/context/employee-context";
import CreateComment from "@/components/about/createComment";
import { Calendar } from "@/components/ui/calendar";
import { addHours, differenceInHours, format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";
import { ServiceContext } from "@/context/service-context";
import { Input } from "@/components/ui/input";
import { useParams } from "next/navigation";

const ArtistDetail = () => {
  const [step, SetStep] = useState<number>(1);
  const [filterDate, setFilterDate] = useState("");

  const [booking, setBooking] = useState({
    firstname: "",
    phoneNumber: "",
    date: "",
    time: "",
    service: "",
    empID: "",
  });
  const { employee } = useContext(EmployeesContext);
  const [subCategory, setSubCategory] = useState([
    {
      name: "",
      category: { name: "", _id: "" },
    },
  ]);
  const [chooseSubCat, setChooseSubCat] = useState("");
  const { services } = useContext(ServiceContext);

  const getSubcategory = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8008/api/v1/category/get-sub`
      );
      if (res.status === 200) {
        console.log(res.data);
        setSubCategory(res.data.getSubCategory);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { employeeID } = useParams();
  const bookNow = async () => {
    const { firstname, phoneNumber, time, date, service } = booking;

    try {
      const response = await axios.post(
        `http://localhost:8008/api/v1/booking`,
        {
          firstname,
          phoneNumber,
          date,
          time,
          empID: employeeID,
          service,
        }
      );
      if (response.status === 201) {
        const res = await axios.post(
          `http://localhost:8008/api/v1/employee/controlTime`,
          {
            date,
            empID: employeeID,
          }
        );
        if (res.status === 200) toast.success("successfull to book now");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to book now");
    }
  };
  console.log("booking", booking);
  useEffect(() => {
    getSubcategory();
  }, []);
  return (
    <div className="flex flex-col text-black px-[15px] py-[30px] gap-10 ">
      <div className="flex flex-col gap-10 md:flex-row md:w-full ">
        <div className="md:w-2/3">
          <h1 className="text-4xl font-extrabold pb-5 md:w-full">Barber men</h1>

          <div className="flex flex-col gap-10 md:flex-row ">
            <div className="">
              <Image
                height={514}
                width={400}
                alt="Logo1"
                src={employee?.profile_img}
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-5 md:w-1/2">
              <div className=" flex gap-5">
                <h1 className="font-bold text-2xl">{employee?.name}</h1>
                <div className="flex gap-1 items-center">
                  <Rating
                    style={{ maxWidth: 80, color: "red" }}
                    value={5}
                    readOnly
                  />
                  <p className="text-sm">5.0</p>
                </div>
              </div>
              <p>{employee?.discription}</p>
              <div className="flex gap-3 items-center">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Тав тух</p>
              </div>
              <div className="flex gap-3">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Үнэ цэнэ</p>
              </div>
              <div className="flex gap-3">
                <TbArrowLeftFromArc className="text-gray-600 text-lg" />
                <p>Чанар</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#BA7894] text-black shadow-2xl p-5 rounded-md flex flex-col gap-5 md:w-1/3   md:fixed md:max-h-[70vh] md:overflow-hidden md:right-5 md:top-30">
          <div className="flex justify-between relative gap-5 ">
            <div className="flex relative gap-5 ">
              <div className=" rounded-lg flex relative w-20 h-20">
                <Image
                  fill={true}
                  src={employee?.profile_img}
                  alt="Photo"
                  className="size-full object-cover rounded-lg"
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex gap-1 items-center">
                  <Rating
                    style={{ maxWidth: 80, color: "red" }}
                    value={5}
                    readOnly
                  />
                  <p className="text-sm">5.0</p>
                </div>
                <p className="font-bold">{employee?.name}</p>
              </div>
            </div>

            <Button onClick={() => SetStep(step - 1)}>Буцах</Button>
          </div>

          {step === 1 && (
            <Button onClick={() => SetStep(step + 1)}>Цаг авах</Button>
          )}

          {step === 2 && (
            <div className="flex  flex-col gap-5">
              <div className="flex relative gap-5 justify-between items-center text-xl font-extrabold">
                <p>Цаг сонгох </p>
                <button className="">
                  <SlCalender />
                </button>
              </div>

              <div className=" flex flex-col rounded-xl p-3 justify-center gap-4">
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
                  className="rounded-md border bg-white"
                />
                <div className="bg-white p-4 rounded-md border flex flex-col gap-5">
                  <div>
                    {employee?.availableDates
                      ?.filter((a) => {
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
                                    employee?.unAvailableTime?.findIndex(
                                      (b) =>
                                        format(
                                          new Date(b),
                                          "yyy-MM-dd HH:mm"
                                        ) ===
                                        format(
                                          addHours(new Date(a.startDate), key),
                                          "yyyy-MM-dd HH:mm"
                                        )
                                    ) !== -1
                                  }
                                  onClick={() => {
                                    setBooking({
                                      ...booking,
                                      time: format(
                                        addHours(new Date(a.startDate), key),
                                        "HH:mm"
                                      ),
                                    });
                                  }}
                                  className={`${
                                    booking?.time ===
                                    format(
                                      addHours(new Date(a.startDate), key),
                                      "HH:mm"
                                    )
                                      ? "focus:bg-green-600 text-white"
                                      : " focus:bg-green-500 text-white"
                                  } hover:bg-[#BA7894] hover:text-white bg-white  border border-[#BA7894] text-[#BA7894]`}
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
                  <Button
                    className="hover:bg-[#BA7894] hover:text-white  bg-white  border border-[#BA7894] text-[#BA7894]"
                    onClick={() => {
                      SetStep(step + 1);
                    }}
                  >
                    Үргэжлүүлэх
                  </Button>
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-5">
              <p className="text-xl font-extrabold">
                Үйлчилгээний төрөл сонгох
              </p>
              <div className="flex flex-wrap gap-3">
                {subCategory?.map((sub, i) => {
                  if (employee?.category === sub?.category?._id)
                    return (
                      <Button
                        key={i}
                        className="hover:border hover:border-[#101843] bg-white text-[#BA7894]"
                        onClick={() => {
                          setChooseSubCat(sub?.category?._id);
                          SetStep(step + 1);
                        }}
                      >
                        {sub.name}
                      </Button>
                    );
                })}
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col gap-5 overflow-hidden">
              <p className="text-xl font-extrabold">Үйлчилгээ сонгоно уу</p>
              {services.map((service, i) => {
                if (service?.category?._id === chooseSubCat)
                  return (
                    <div
                      key={i}
                      className="flex justify-between items-center text-[#101843] bg-white p-3 rounded-lg"
                    >
                      <div>
                        <h1 className="font-extrabold">{service?.name}</h1>
                        <p>Үргэжлэх хугацаа: {service?.time} мин</p>
                        <p className="font-extrabold">{service?.price}₮</p>
                      </div>
                      <Button
                        className="border border-[#101843]"
                        onClick={() => {
                          setBooking({
                            ...booking,
                            service: service?.name,
                          });

                          SetStep(step + 1);
                        }}
                      >
                        <MdAdd />
                      </Button>
                    </div>
                  );
              })}

              <div className="text-black bg-white p-3 rounded-lg">
                <p className="text-center pt-2 font-bold">
                  Цаг баталгаажуулалт 5 000₮. Таньд амжилт хүсэе
                </p>
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col w-96 gap-10 m-auto p-3 my-4">
              <Input
                placeholder="Enter your name"
                type="text"
                onChange={(e) => {
                  setBooking({ ...booking, firstname: e.target.value });
                }}
              />
              <Input
                placeholder="Enter your phonenumber"
                type="number"
                onChange={(e) => {
                  setBooking({ ...booking, phoneNumber: e.target.value });
                }}
              />
              <Button
                className="border border-[#101843]"
                onClick={() => SetStep(step + 1)}
              >
                Үргэжлүүлэх
              </Button>
            </div>
          )}
          {step === 6 && (
            <div className="m-auto flex flex-col justify-center items-center gap-5 bg-white p-4">
              <p className="text-xl font-bold">Цаг баталгаажуулах төлбөр</p>
              <Image
                src="/images/qr.png"
                width={300}
                height={300}
                alt="Picture of the author"
              />
              <p>Төлөх боломжтой банкууд:</p>
              <div className="flex gap-5">
                <Image
                  src="/images/golomt.jpg "
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/images/khas.jpg "
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/images/socialpay.png "
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/images/tdb.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                <Image
                  src="/images/khan.jpg "
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
              <Button
                className="hover:bg-[#BA7894] hover:text-white  bg-white  border border-[#BA7894] text-[#BA7894]"
                onClick={() => {
                  SetStep(step + 1), bookNow();
                }}
              >
                Цаг захиалах
              </Button>
            </div>
          )}
          {step === 7 && (
            <div className="border border-gray-200 bg-white rounded-md shadow-xl p-5 flex flex-col justify-center items-center gap-5">
              <Image
                src="/images/Correct.jpg"
                width={100}
                height={100}
                alt="Picture of the author"
              />
              <h1 className="text-xl">Цаг амжилттай захиалагдлаа 😄😄😄</h1>
              <p>
                Хугацаа: {booking.date}-{booking.time}
                <br />
                Хаяг: Хан-Уул дүүрэгийн 15-р хороо Энхтайвний гүүрний зүүн урд
                талд Наадам центр 2 давхарт Great Salon
              </p>
              <Button
                className="hover:bg-[#BA7894] hover:text-white  bg-white  border border-[#BA7894] text-[#BA7894]"
                onClick={() => {
                  SetStep(1);
                }}
              >
                Done
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-10 md:pr-10 md:w-2/3">
        <h1 className="text-4xl font-extrabold">Reviews</h1>
        <Comment />
        <CreateComment />
      </div>
    </div>
  );
};

export default ArtistDetail;
