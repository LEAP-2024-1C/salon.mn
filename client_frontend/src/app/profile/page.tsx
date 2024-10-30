"use client";
import OrderHistory from "@/components/profile/orderhistory";
import ProfileInfo from "@/components/profile/profileinfo";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(true);
  const showProfilInfo = () => {
    setShow(true);
  };
  const hideProfilInfo = () => {
    setShow(false);
  };
  return (
    <div className="flex justify-center bg-[#101828] py-24 ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 w-1/3 text-start">
          <Button
            className="bg-gray-200 text-start text-black px-5  hover:bg-white hover:rounded-full  focus:bg-white focus:rounded-full "
            onClick={showProfilInfo}
          >
            Хэрэглэгчийн хэсэг
          </Button>
          <Button
            className=" bg-gray-200 text-start text-black  px-5 hover:bg-white hover:rounded-full  focus:bg-white focus:rounded-full "
            onClick={hideProfilInfo}
          >
            Захиалгын түүх
          </Button>
        </div>
        {show === true ? <ProfileInfo /> : <OrderHistory />}
      </div>
    </div>
  );
};

export default Profile;
