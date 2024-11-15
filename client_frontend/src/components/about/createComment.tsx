"use client";

import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { EmployeesContext } from "@/context/employee-context";

const CreateComment = () => {
  const [step, SetStep] = useState<number>(1);
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const { employeeID } = useParams();

  const { getEmployee } = useContext(EmployeesContext);
  const createComment = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:8008/api/v1/employee/created-comment",
        data: { description, employeeID, rate: rating },
      });
      if (res.status === 200) {
        toast.success("Сэтгэгдэл үлдээсэн таньд баярлалаа", { autoClose: 500 });
        await getEmployee();
      }
    } catch (error) {
      //   console.log("Сэтгэгдэл үлдээхэд алдаа гарлаа.Та кодоо шалгана уу", error);
      toast.error("Сэтгэгдэл үлдээхэд алдаа гарлаа. Та дахин оролдоно уу", {
        autoClose: 500,
      });
    }
  };

  return (
    <div className="flex flex-col gap-2 bg-gray-100 mt-5 rounded-lg p-5 md:w-1/2">
      <div>
        {step === 1 && (
          <div className="flex flex-col gap-3">
            <p>Та donation явуулаад сэтгэгдэлээ үлдээгээрэй </p>
            <div className=" App ">
              <Rating
                style={{ maxWidth: 120 }}
                value={rating}
                onChange={setRating}
              />
            </div>
            <input
              type="text"
              className="border-[1px] rounded-sm p-2 h-20 text-start text-wrap"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button onClick={() => SetStep(step + 1)}>Үргэжлүүлэх</Button>
          </div>
        )}
      </div>
      {step === 2 && (
        <div className="m-auto flex flex-col justify-center items-center gap-2 bg-white p-4">
          <p className="text-xl font-bold">Donation илгээх</p>
          <Image
            src="/images/qr.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <p>Төлөх боломжтой банкууд:</p>
          <div className="grid grid-cols-3 justify-center gap-5">
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
            className="hover:bg-[#BA7894] hover:text-white w-full  bg-white  border border-[#BA7894] text-[#BA7894]"
            onClick={() => {
              SetStep(step + 1);
              return createComment();
            }}
          >
            Шалгах
          </Button>
        </div>
      )}
      {step === 3 && (
        <div className="border bg-white  shadow-xl p-5 flex flex-col justify-center items-center gap-5">
          <Image
            src="/images/Correct.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          <h1 className="text-xl">
            Cэтгэгдлээ үлдээсэнд таньд баярлалаа 😄😄😄
          </h1>
          <p>{description}</p>
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
  );
};

export default CreateComment;
