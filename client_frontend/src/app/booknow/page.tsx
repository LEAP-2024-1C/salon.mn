"use client";

import * as React from "react";
import { useState } from "react";

//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
// import { toast } from "react-toastify";
// import axios from "axios";
import BarberCard from "@/components/cards/barber-card";
import { EmployeesContext } from "@/context/employee-context";
import { Calendar } from "@/components/ui/calendar";
import { addHours, differenceInHours, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const BookNow = () => {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [isTrue, setIsTrue] = useState("");
  const { employees } = React.useContext(EmployeesContext);
  const [filterDate, setFilterDate] = useState("");
  const [mainCat, setMainCat] = useState("");
  const [booking, setBooking] = useState({
    firstname: "",
    phoneNumber: "",
    date: "",
    time: "",
    service: "",
    empID: "",
  });
  const [subCategory, setSubCategory] = useState([
    {
      name: "",
      category: { name: "" },
    },
  ]);
  const [chooseEmployee, setChoosenEmployee] = useState<string | null>("");

  const findIndex = employees?.findIndex(
    (employee) => employee?._id === chooseEmployee
  );
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
  const bookNow = async () => {
    const { firstname, phoneNumber, time, date, service, empID } = booking;

    try {
      const response = await axios.post(
        `http://localhost:8008/api/v1/booking`,
        {
          firstname,
          phoneNumber,
          date,
          time,
          empID,
          service,
        }
      );
      if (response.status === 201) {
        setStep(4);
        toast.success("successfull to book now");
      }
    } catch (error) {
      console.log(error);
      toast.error("failed to book now");
    }
  };
  console.log(booking);
  React.useEffect(() => {
    getSubcategory();
  }, []);
  return (
    <div className={step === 3 ? "" : "h-[478px]"}>
      <div className="p-2 pt-10 flex flex-col gap-10 md:m-auto md:container ">
        {/* <div className="flex flex-row gap-3">
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
        </div> */}
        {step === 0 ? (
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
            <Select
              onValueChange={(value) => {
                setMainCat(value);
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Үйлчилгээний төрөл сонгоно уу" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Үйлчилгээ</SelectLabel>
                  <SelectItem value="nail artist">nail artist</SelectItem>
                  <SelectItem value="barber">barber</SelectItem>
                  <SelectItem value="beautician">beautician</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select
              onValueChange={(value) => {
                setBooking({ ...booking, service: value });
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Үйлчилгээгээ сонгоно уу" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Үйлчилгээ</SelectLabel>
                  {subCategory
                    ?.filter((subCat) => subCat?.category.name === mainCat)
                    .map((subCat, idx) => {
                      return (
                        <SelectItem
                          key={`subcat` + idx}
                          value={subCat.name ? subCat.name : "value"}
                        >
                          {subCat.name}
                        </SelectItem>
                      );
                    })}
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button
              className="hover:bg-[#BA7894] hover:text-white bg-white  border border-[#BA7894] text-[#BA7894]"
              onClick={() => {
                setStep(1);
              }}
            >
              Дараагийн алхам
            </Button>
          </div>
        ) : step === 1 ? (
          <div className="flex flex-col justify-center gap-4">
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
                    <BarberCard
                      name={emp.name}
                      selected={emp.name === isTrue}
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center ">
              <Button
                className="hover:bg-[#BA7894] hover:text-white  bg-white  border border-[#BA7894] text-[#BA7894]"
                onClick={() => {
                  setStep(2);
                }}
              >
                Дараагийн алхам
              </Button>
            </div>
          </div>
        ) : step === 2 ? (
          <div className=" flex rounded-xl p-3 justify-center gap-4">
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
                              className="hover:bg-[#BA7894] hover:text-white bg-white  border border-[#BA7894] text-[#BA7894]"
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
              <Button
                className="hover:bg-[#BA7894] hover:text-white  bg-white  border border-[#BA7894] text-[#BA7894]"
                onClick={() => {
                  setStep(3);
                }}
              >
                Дараагийн алхам
              </Button>
            </div>
          </div>
        ) : step === 3 ? (
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
              onClick={bookNow}
            >
              Цаг захиалах
            </Button>
          </div>
        ) : (
          <div className="m-auto">
            <div className="border border-gray-200 w-[450px] shadow-xl p-5 flex flex-col justify-center items-center gap-5">
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
                  router.push("/");
                }}
              >
                Done
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default BookNow;
// filter((emp) => emp.subCategory.name === service)
//setService(value);
//setTime(new Date(addHours(new Date(a.startDate), key)));
//setOpen(true), setIsActive(true);
//app.use("/api/v1/booking", bookingRoute);
