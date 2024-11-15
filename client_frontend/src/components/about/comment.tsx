"use client";

import { EmployeesContext } from "@/context/employee-context";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { useContext } from "react";

const Comment = () => {
  const { employee } = useContext(EmployeesContext);
  return (
    <div className=" flex flex-col  gap-5 text-black">
      {employee?.comment?.map((com, i) => (
        <div key={i} className="flex items-center relative gap-5 ">
          <div className="border border-pink-600 rounded-full flex relative w-11 h-11">
            <Image
              fill={true}
              src="https://static.vecteezy.com/system/resources/previews/040/359/751/non_2x/client-icon-in-logotype-vector.jpg"
              alt="Photo"
              className="size-full object-cover rounded-full p-[2px]"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-1 items-center">
              <Rating
                style={{ maxWidth: 80, color: "red" }}
                value={com.rate}
                readOnly
              />
              <p className="text-sm">{com.rate}</p>
            </div>
            <p className="font-bold">Client32</p>
            <p>{com.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comment;
