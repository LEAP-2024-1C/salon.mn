"use client";

import { EmployeesContext } from "@/context/employee-context";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const Artists = () => {
  const { employees } = useContext(EmployeesContext);
  return (
    <div className="bg-[#101828] p-5 grid grid-cols-2 gap-5">
      {employees?.map((employee, key1) => {
        return (
          <Link
            key={key1}
            href={employee._id}
            className="flex  relative gap-5 h-[300px]  bg-black"
          >
            <Image
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
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Artists;
