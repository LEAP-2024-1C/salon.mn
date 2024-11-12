"use client";

import { Button } from "@/components/ui/button";
import { EmployeesContext } from "@/context/employee-context";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Artists = () => {
  const { employees } = useContext(EmployeesContext);
  return (
    <div className=" my-16 flex flex-wrap gap-10">
      {employees?.map((employee, key1) => {
        return (
          <Link key={key1} href={employee._id} className="m-auto">
            <div className="w-[384px] h-[536px] border border-gray-400 rounded-2xl overflow-hidden">
              <div className="h-[274px] overflow-hidden">
                <Image
                  width={384}
                  height={274}
                  alt="Logo"
                  src={employee?.profile_img}
                />
              </div>
              <div className="p-6 flex flex-col gap-5">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <Rating
                      style={{ maxWidth: 80, color: "red" }}
                      value={4}
                      readOnly
                    />
                    <p className="text-sm">5.0</p>
                  </div>
                  <p>Эрэгтэй Үсчин</p>
                </div>
                <div>
                  <h1 className="text-2xl">{employee?.name}</h1>
                  <p className="text-[#555555]">{employee?.discription}</p>
                </div>
                <Button className="hover:bg-[#BA7894] hover:text-white w-full bg-white  border border-[#BA7894] text-[#BA7894]">
                  Цаг захиалах
                </Button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Artists;

{
  /* <Image
              fill={true}
              src={employee?.profile_img}
              alt="Photo"
              className=" size-full object-cover rounded-lg absolute  opacity-30"
            />

            <div className="flex flex-col justify-between absolute left-2 bottom-2 ">
              <div className="flex gap-1 items-center">
                <Rating
                  style={{ maxWidth: 80, color: "red" }}
                  value={4}
                  readOnly
                />
                <p className="text-sm">5.0</p>
              </div>
              <p className="font-bold">{employee?.name}</p>
              <p>{employee?.discription}</p>
            </div> */
}
